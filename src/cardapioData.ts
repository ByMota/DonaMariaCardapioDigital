export interface CardapioProps {
  pratos: {
    id: string;
    titulo: string;
    entrada?: { item: string }[];
    principal?: { item: string }[];
    acompanhamentos?: { item: string }[];
    sobremesa?: { item: string }[];
  }[];
}

export const cardapioData: CardapioProps = {
  pratos: [
    {
      id: crypto.randomUUID(),
      titulo: "Massas",
      entrada: [
        {
          item: 'Bruschettas, Manjericão, Mussarela e Tomate',
        },
        {
          item: 'Cestinha de massa, Filo de queijo branco e Geleia de pimenta',
        },
      ],
      principal: [
        {
          item: 'Penne, Fettuccine, Sofioli e Ravioli',
        },
        {
          item: 'Molho ao funghi, Molho de tomate fresco e manjericão, Molho 3 queijos e Molho Bolanhesa',
        },
      ],
      acompanhamentos: [
        {
          item: 'Pão italiano',
        },
        {
          item: 'Salada caprese',
        },
        {
          item: 'Legumes salteado na manteiga',
        },
      ],
      sobremesa: [
        {
          item: 'Panna cotta de goiaba',
        },
        {
          item: 'Salame di cioccolato',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      titulo: "Churrasco",
      entrada: [
        {
          item: 'Pão de alho com queijo coalho.',
        },
      ],
      principal: [
        {
          item: 'Fraldinha, Maminha, Picanha, Alcatra, Linguiça, Coração de frango, Drumet e Ostrinha de frango e Panceta',
        },
      ],
      acompanhamentos: [
        {
          item: 'Arroz branco',
        },
        {
          item: 'Farofa de bacon',
        },
        {
          item: 'Salada de maionese',
        },
        {
          item: 'Vinagrete',
        },
        {
          item: 'Salada verde',
        },
      ],
      sobremesa: [
        {
          item: 'Banana grelhada com canela e açúcar',
        },
        {
          item: 'Mousse de limão',
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      titulo: "Feijoada",
      entrada: [
        {
          item: 'Pastelzinho de queijo',
        },
        {
          item: 'Caldo de feijão',
        },
      ],
      principal: [
        {
          item: 'Feijoada light (calabresa, paio, bacon, lombro e costelinha)',
        },
        {
          item: 'Feijoada completa (inclui pé e rabo de porco)',
        },
        {
          item: 'Arroz branco',
        },
      ],
      acompanhamentos: [
        {
          item: 'Farofa temperada',
        },
        {
          item: 'Couve refogada',
        },
        {
          item: 'Torresmo',
        },
      ],
      sobremesa: [
        {
          item: 'Mousse de limão',
        },
        {
          item: 'Fruta da estação',
        },
      ],
    },
  ],
};
