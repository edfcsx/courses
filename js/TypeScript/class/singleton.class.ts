// Diferença entre static e singleton
// A maior diferença e que a implementação de herança no static não é tão facil quanto no single
// no singleton se pode usar conceitos de herança mais facilmente

class Unique {
  private static instance: Unique = new Unique

  private constructor() {}

  static getInstance(): Unique {
    return Unique.instance
  }

  now() {
    return new Date
  }
}

console.log(Unique.getInstance().now())