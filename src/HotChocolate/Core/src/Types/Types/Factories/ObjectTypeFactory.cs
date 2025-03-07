using System.Collections.Generic;
using HotChocolate.Language;
using HotChocolate.Types.Descriptors;
using HotChocolate.Types.Descriptors.Definitions;

#nullable enable

namespace HotChocolate.Types.Factories;

internal sealed class ObjectTypeFactory
    : ITypeFactory<ObjectTypeDefinitionNode, ObjectType>
    , ITypeFactory<ObjectTypeExtensionNode, ObjectTypeExtension>
{
    public ObjectType Create(IDescriptorContext context, ObjectTypeDefinitionNode node)
    {
        var preserveSyntaxNodes = context.Options.PreserveSyntaxNodes;
        Stack<IDefinition> path = context.GetOrCreateDefinitionStack();
        path.Clear();

        var typeDefinition = new ObjectTypeDefinition(
            node.Name.Value,
            node.Description?.Value);
        typeDefinition.BindTo = node.GetBindingValue();

        if (preserveSyntaxNodes)
        {
            typeDefinition.SyntaxNode = node;
        }

        foreach (NamedTypeNode typeNode in node.Interfaces)
        {
            typeDefinition.Interfaces.Add(TypeReference.Create(typeNode));
        }

        SdlToTypeSystemHelper.AddDirectives(context, typeDefinition, node, path);

        DeclareFields(context, typeDefinition, node.Fields, path, preserveSyntaxNodes);

        return ObjectType.CreateUnsafe(typeDefinition);
    }

    public ObjectTypeExtension Create(IDescriptorContext context, ObjectTypeExtensionNode node)
    {
        var preserveSyntaxNodes = context.Options.PreserveSyntaxNodes;
        Stack<IDefinition> path = context.GetOrCreateDefinitionStack();
        path.Clear();

        var typeDefinition = new ObjectTypeDefinition(node.Name.Value);
        typeDefinition.BindTo = node.GetBindingValue();

        foreach (NamedTypeNode typeNode in node.Interfaces)
        {
            typeDefinition.Interfaces.Add(TypeReference.Create(typeNode));
        }

        SdlToTypeSystemHelper.AddDirectives(context, typeDefinition, node, path);

        DeclareFields(context, typeDefinition, node.Fields, path, preserveSyntaxNodes);

        return ObjectTypeExtension.CreateUnsafe(typeDefinition);
    }

    private static void DeclareFields(
        IDescriptorContext context,
        ObjectTypeDefinition parent,
        IReadOnlyCollection<FieldDefinitionNode> fields,
        Stack<IDefinition> path,
        bool preserveSyntaxNodes)
    {
        path.Push(parent);

        foreach (FieldDefinitionNode field in fields)
        {
            var fieldDefinition = new ObjectFieldDefinition(
                field.Name.Value,
                field.Description?.Value,
                TypeReference.Create(field.Type));
            fieldDefinition.BindTo = field.GetBindingValue();

            if (preserveSyntaxNodes)
            {
                fieldDefinition.SyntaxNode = field;
            }

            SdlToTypeSystemHelper.AddDirectives(context, fieldDefinition, field, path);

            if (field.DeprecationReason() is { Length: > 0 } reason)
            {
                fieldDefinition.DeprecationReason = reason;
            }

            DeclareFieldArguments(context, fieldDefinition, field, path, preserveSyntaxNodes);

            parent.Fields.Add(fieldDefinition);
        }

        path.Pop();
    }

    private static void DeclareFieldArguments(
        IDescriptorContext context,
        ObjectFieldDefinition parent,
        FieldDefinitionNode field,
        Stack<IDefinition> path,
        bool preserveSyntaxNodes)
    {
        path.Push(parent);

        foreach (InputValueDefinitionNode argument in field.Arguments)
        {
            var argumentDefinition = new ArgumentDefinition(
                argument.Name.Value,
                argument.Description?.Value,
                TypeReference.Create(argument.Type),
                argument.DefaultValue);
            argumentDefinition.BindTo = argument.GetBindingValue();

            if (preserveSyntaxNodes)
            {
                argumentDefinition.SyntaxNode = argument;
            }

            SdlToTypeSystemHelper.AddDirectives(context, argumentDefinition, argument, path);

            parent.Arguments.Add(argumentDefinition);
        }

        path.Pop();
    }
}
