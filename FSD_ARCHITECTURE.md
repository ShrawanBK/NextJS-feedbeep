# Feature Sliced Design (FSD) Architecture

** AI GENERATED **

This project follows the Feature Sliced Design methodology, adapted for Next.js App Router.

## Layer Structure

### 1. **app/** (Pages Layer)

- **Purpose**: Next.js App Router pages and layouts
- **Dependencies**: Can import from `views`, `widgets`, `features`, `entities`, `shared`
- **Files**: `page.tsx`, `layout.tsx`, `loading.tsx`, etc.

### 2. **views/** (Views Layer)

- **Purpose**: Application views that compose widgets
- **Dependencies**: Can import from `widgets`, `features`, `entities`, `shared`
- **Cannot import from**: `app`, `pages`
- **Structure**: Each view represents a page-level component

### 3. **widgets/** (Widgets Layer)

- **Purpose**: Complex UI components that combine features
- **Dependencies**: Can import from `features`, `entities`, `shared`
- **Cannot import from**: `app`, `views`, `pages`
- **Structure**: Reusable UI components (cards, lists, layouts)

### 4. **features/** (Features Layer)

- **Purpose**: Business logic and user interactions
- **Dependencies**: Can import from `entities`, `shared`
- **Cannot import from**: `app`, `views`, `widgets`, `pages`
- **Structure**: User actions, forms, business logic

### 5. **entities/** (Entities Layer)

- **Purpose**: Business entities and data models
- **Dependencies**: Can import from `shared`
- **Cannot import from**: `app`, `views`, `widgets`, `features`, `pages`
- **Structure**: API calls, data models, business logic

### 6. **shared/** (Shared Layer)

- **Purpose**: Shared utilities, UI components, and configurations
- **Dependencies**: Cannot import from any other layer
- **Structure**: UI components, utilities, configs, types

## Dependency Flow

```
app → views → widgets → features → entities → shared
```

## Key Principles

1. **Strict Dependency Direction**: Each layer can only import from layers below it
2. **Public API**: Each layer exports its public API through index files
3. **Separation of Concerns**: Each layer has a specific responsibility
4. **Reusability**: Components are designed to be reusable across the application

## File Structure Examples

### Entity Layer

```
entities/
├── article/
│   ├── api/
│   │   ├── queries.ts
│   │   ├── query-keys.ts
│   │   ├── use-articles.ts
│   │   └── index.ts
│   ├── model/
│   │   └── article.type.ts
│   └── index.ts
```

### Feature Layer

```
features/
├── article/
│   ├── filter-articles/
│   │   ├── model/
│   │   │   └── use-article-filters-store.ts
│   │   └── index.ts
│   ├── save-article/
│   │   ├── ui/
│   │   │   └── save-article-button.tsx
│   │   └── index.ts
│   └── index.ts
```

### Widget Layer

```
widgets/
├── articles/
│   ├── article-card/
│   │   ├── ui/
│   │   │   ├── article-card.tsx
│   │   │   └── article-card-skeleton.tsx
│   │   └── index.ts
│   └── index.ts
```

## Best Practices

1. **Index Files**: Always create index files for clean exports
2. **Type Exports**: Export types from the appropriate layer
3. **Component Naming**: Use descriptive names that indicate the layer
4. **Import Paths**: Use absolute imports with layer prefixes
5. **Documentation**: Document complex business logic and API contracts
