export interface CardapioProps {
  prato: {
    entrada: { item: string }[];
    principal?: { item: string }[];
    acompanhamentos?: { item: string }[];
    sobremesa?: { item: string }[];
  };
}

export const cardapioData: CardapioProps = {
  prato: {
    entrada: [
      {
        item: 'Pão de alho com ervas finas e queijo derretido.',
      },
      {
        item: "Salada Caprese: Tomates frescos, queijo de búfala e manjericão regados com azeite de oliva."                    
      }
      ],
    principal: [
      {
        item: 'Picanha suculenta grelhada no ponto perfeito.',
      },
      {
        item: 'Costelinha de porco com molho barbecue artesanal.',
      },
      {
        item: 'Linguiça artesanal temperada.',
      },
      {
        item: 'Frango marinado com ervas e limão.',
      },
      ],
    acompanhamentos: [
      {
        item: 'Arroz branco soltinho.',
      },
      {
        item: 'Farofa crocante.',
      },
      {
        item: 'Arroz branco soltinho.',
      },
      {
        item: 'Feijão tropeiro com bacon e linguiça.',
      },
      {
        item: 'Salada de maionese com legumes frescos.',
      },
    ],
    sobremesa: [
      {
        item: 'Espetinho de frutas frescas com calda de chocolate.',
      },
      {
        item: 'Pudim de leite condensado cremoso.',
      },
      {
        item: 'Torta de limão com merengue.',
      },
    ],
  }
}