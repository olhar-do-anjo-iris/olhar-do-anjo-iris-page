# Estrutura de Imagens da Galeria

Esta pasta contém as imagens dos eventos que aparecem na galeria do site.

## Estrutura de Pastas

```
images/
├── pascoa/          # Imagens do evento de Páscoa
├── inverno/         # Imagens do evento de Inverno
├── dia-das-criancas/ # Imagens do evento de Dia das Crianças
└── natal/           # Imagens do evento de Natal
```

## Como Adicionar Imagens

1. **Adicione as imagens nas pastas correspondentes:**
   - Coloque as imagens de Páscoa em `pascoa/`
   - Coloque as imagens de Inverno em `inverno/`
   - Coloque as imagens de Dia das Crianças em `dia-das-criancas/`
   - Coloque as imagens de Natal em `natal/`

2. **Formatos suportados:**
   - JPG/JPEG
   - PNG
   - WebP

3. **Atualize o componente Galeria.tsx:**
   - Abra `components/Galeria.tsx`
   - Na função `carregarImagensDoEvento`, adicione os caminhos das suas imagens
   - Exemplo:
     ```typescript
     pascoa: [
       '/images/pascoa/foto1.jpg',
       '/images/pascoa/foto2.jpg',
       '/images/pascoa/foto3.jpg',
     ],
     ```

## Exemplo de Estrutura Completa

```
public/
└── images/
    ├── pascoa/
    │   ├── foto1.jpg
    │   ├── foto2.jpg
    │   └── foto3.jpg
    ├── inverno/
    │   ├── evento1.jpg
    │   └── evento2.jpg
    ├── dia-das-criancas/
    │   ├── crianca1.jpg
    │   ├── crianca2.jpg
    │   └── crianca3.jpg
    └── natal/
        ├── natal1.jpg
        ├── natal2.jpg
        └── natal3.jpg
```

## Notas

- Os caminhos das imagens devem começar com `/images/` (sem `public`)
- Use nomes descritivos para facilitar a organização
- Mantenha as imagens otimizadas para web (tamanho razoável)

