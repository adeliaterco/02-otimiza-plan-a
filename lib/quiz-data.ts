// ===== CONFIGURAÇÕES E CONSTANTES =====
const QUIZ_CONFIG = {
  TOTAL_STEPS: 12,
  AUTO_ADVANCE_DELAY: 3000,
  PEOPLE_COUNT_INTERVAL: 45000,
  ANALYSIS_DELAY: 2000
}

const EXPERT_IMAGE = "https://comprarplanseguro.shop/wp-content/uploads/2025/09/Generated-Image-September-07_-2025-12_00AM-_1_-e1757389439336.webp"

// ===== ELEMENTOS REUTILIZÁVEIS =====
const commonElements = {
  expertPhoto: () => ({ 
    expertPhoto: true, 
    expertImage: EXPERT_IMAGE 
  }),
  
  profileAnalysis: (percentage) => ({ 
    profileAnalysis: "Personalizando tu estrategia emocional...", 
    profileComplete: percentage 
  }),
  
  testimonial: (name, text, image) => ({
    testimonialDisplay: true,
    testimonialName: name,
    testimonialText: text,
    testimonialImage: image
  }),
  
  timer: (text) => ({ timer: text }),
  
  counter: (text) => ({ counter: text }),
  
  analysisFlow: (analysisText, successRate) => ({
    analysisText,
    successRate
  })
}

// ===== OPÇÕES PADRONIZADAS =====
const standardOptions = {
  gender: ["MASCULINO", "FEMENINO"],
  
  ageRanges: [
    "18-29 - Fase de descubrimientos emocionales",
    "29-39 - Período de consolidación de valores",
    "39-49 - Momento de reevaluación de prioridades",
    "50+ - Fase de madurez emocional"
  ],
  
  timeApart: [
    "Menos de una semana", 
    "Hace 1 mes", 
    "De 2 a 6 meses", 
    "Más de 6 meses"
  ],
  
  relationshipDuration: [
    "Más de 3 años", 
    "De 1 a 3 años", 
    "De 6 meses a 1 año", 
    "Menos de 6 meses"
  ],
  
  commitmentLevel: [
    "1 - No estoy seguro", 
    "2 - Me lo estoy pensando", 
    "3 - Lo quiero bastante", 
    "4 - Lo quiero muchísimo"
  ]
}

// ===== OPÇÕES POR GÊNERO =====
const genderSpecificOptions = {
  breakup: {
    masculino: [
      "Ella terminó conmigo", 
      "Yo terminé con ella", 
      "Decidimos terminar de mutuo acuerdo"
    ],
    feminino: [
      "Él terminó conmigo", 
      "Yo terminé con él", 
      "Decidimos terminar de mutuo acuerdo"
    ]
  },
  
  painfulPart: {
    masculino: [
      "😔 Lidiar con la soledad y el vacío",
      "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
      "😐 Lidiar con recuerdos y memorias",
      "💔 Imaginarla con otro hombre",
      "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
      "⚡ Otro"
    ],
    feminino: [
      "😔 Lidiar con la soledad y el vacío",
      "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
      "😐 Lidiar con recuerdos y memorias",
      "💔 Imaginarlo con otra mujer",
      "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
      "⚡ Otro"
    ]
  },
  
  currentSituation: {
    masculino: [
      "🧐 Estoy aplicando contacto cero",
      "😢 Ella me ignora completamente",
      "❌ Me ha bloqueado en todas las redes sociales",
      "🤝 Hablamos solo de cosas necesarias",
      "🤔 Charlamos de vez en cuando",
      "😌 Seguimos siendo amigos",
      "🔥 Hemos tenido encuentros íntimos después de la ruptura"
    ],
    feminino: [
      "🧐 Estoy aplicando contacto cero",
      "😢 Él me ignora completamente",
      "❌ Me ha bloqueado en todas las redes sociales",
      "🤝 Hablamos solo de cosas necesarias",
      "🤔 Charlamos de vez en cuando",
      "😌 Seguimos siendo amigos",
      "🔥 Hemos tenido encuentros íntimos después de la ruptura"
    ]
  },
  
  exWithSomeone: {
    masculino: [
      "🚫 No, está soltera",
      "🤔 No estoy seguro",
      "😔 Sí, está saliendo con alguien",
      "💔 Sí, tiene una relación seria",
      "🔄 Está saliendo con varias personas"
    ],
    feminino: [
      "🚫 No, está soltero",
      "🤔 No estoy segura",
      "😔 Sí, está saliendo con alguien",
      "💔 Sí, tiene una relación seria",
      "🔄 Está saliendo con varias personas"
    ]
  }
}

// ===== PERGUNTAS POR GÊNERO =====
const genderQuestions = {
  breakup: {
    masculino: "¿CÓMO FUE SU SEPARACIÓN?",
    feminino: "¿CÓMO FUE SU SEPARACIÓN?"
  },
  
  currentSituation: {
    masculino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
    feminino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?"
  },
  
  exWithSomeone: {
    masculino: "¿ELLA YA ESTÁ SALIENDO CON OTRA PERSONA?",
    feminino: "¿ÉL YA ESTÁ SALIENDO CON OTRA PERSONA?"
  },
  
  commitmentLevel: {
    masculino: "¿CUÁNTO QUIERES RECUPERARLA?",
    feminino: "¿CUÁNTO QUIERES RECUPERARLO?"
  }
}

// ===== BÔNUS CONFIGURADOS =====
const bonusConfigs = [
  {
    id: 1,
    title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
    value: 47,
    description: "Las 21 frases exactas que hacen que piense en ti obsesivamente."
  },
  {
    id: 2,
    title: "PROTOCOLO DE EMERGENCIA 72H",
    value: 37,
    description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar."
  }
]

// ===== DEPOIMENTOS CONFIGURADOS =====
const testimonialConfigs = {
  carlos: {
    name: "Carlos M.",
    text: "¡Volvió a responderme al 3er día y me propuso vernos al 6º día!",
    image: "https://comprarplanseguro.shop/wp-content/uploads/2025/08/Captura-de-Tela-2025-08-08-as-19.01.05.png"
  },
  
  rafael: {
    name: "Rafael S.",
    text: "Estaba perdido después de la ruptura. El Plan A me dio dirección y confianza. ¡Hoy estamos más unidos que nunca!",
    image: "https://nutricaoalimentos.shop/wp-content/uploads/2025/09/lg-9xvta-canva-couple-in-love-mafv-z4mya0.jpg"
  }
}

// ===== QUIZ STEPS PRINCIPAL =====
export const quizSteps = [
  // STEP 1 - SELEÇÃO DE GÊNERO
  {
    id: 1,
    question: "¡NO DEJES QUE LA PERSONA QUE AMAS SALGA DE TU VIDA PARA SIEMPRE!",
    description: "Haz la prueba rápida de 2 minutos y descubre cómo aplicar el PLAN A - en tu caso específico.",
    subtext: "Selecciona tu género:",
    options: standardOptions.gender,
    warning: "⚠️ ATENCIÓN: ¡Este método comprobado solo debe usarse si estás 100% comprometido en reconquistar tu amor perdido!",
    elements: {
      heartbeat: true,
      ...commonElements.timer("Prueba de 2 minutos")
    }
  },

  // STEP 2 - IDADE
  {
    id: 2,
    question: "¿CUÁL ES TU EDAD?",
    description: "(Esta información es crucial para personalizar tu plan de reconquista)",
    options: standardOptions.ageRanges,
    elements: {
      ageIcons: true,
      ...commonElements.counter("personas que ya hicieron la prueba hoy")
    }
  },

  // STEP 3 - TEMPO SEPARADOS
  {
    id: 3,
    question: "¿CUÁNTO TIEMPO LLEVAN SEPARADOS?",
    description: "(El tiempo es un factor crítico para tu estrategia de reconquista)",
    options: standardOptions.timeApart,
    bonusUnlock: bonusConfigs[0]
  },

  // STEP 4 - COMO FOI A SEPARAÇÃO
  {
    id: 4,
    question: genderQuestions.breakup,
    description: "(Esta información es vital para determinar tu estrategia específica)",
    options: genderSpecificOptions.breakup,
    elements: {
      ...commonElements.analysisFlow(
        "Calculando tasa de éxito para tu caso...",
        "¡Tu caso tiene características prometedoras!"
      ),
      ...commonElements.testimonial(
        testimonialConfigs.carlos.name,
        testimonialConfigs.carlos.text,
        testimonialConfigs.carlos.image
      )
    }
  },

  // STEP 5 - TEMPO JUNTOS
  {
    id: 5,
    question: "¿CUÁNTO TIEMPO ESTUVIERON JUNTOS?",
    description: "(La duración de la relación influye directamente en tu estrategia)",
    options: standardOptions.relationshipDuration
  },

  // STEP 6 - PARTE MAIS DOLOROSA
  {
    id: 6,
    question: "¿CUÁL FUE LA PARTE MÁS DOLOROSA DE LA RUPTURA?",
    description: "(Identificar tu dolor principal es esencial para tu recuperación emocional y reconquista)",
    options: genderSpecificOptions.painfulPart,
    elements: {
      ...commonElements.profileAnalysis("46%")
    }
  },

  // STEP 7 - SITUAÇÃO ATUAL
  {
    id: 7,
    question: genderQuestions.currentSituation,
    description: "(Esta información determinará tu punto de partida en el PLAN A)",
    options: genderSpecificOptions.currentSituation,
    elements: {
      ...commonElements.profileAnalysis("62%"),
      testimonialImage: ""
    }
  },

  // STEP 8 - EX COM OUTRA PESSOA
  {
    id: 8,
    question: genderQuestions.exWithSomeone,
    description: "(Esta información es crucial para definir tu enfoque estratégico)",
    options: genderSpecificOptions.exWithSomeone,
    bonusUnlock: bonusConfigs[1],
    elements: {
      ...commonElements.profileAnalysis("77%"),
      ...commonElements.testimonial(
        testimonialConfigs.rafael.name,
        testimonialConfigs.rafael.text,
        testimonialConfigs.rafael.image
      )
    }
  },

  // STEP 9 - NÍVEL DE COMPROMETIMENTO
  {
    id: 9,
    question: genderQuestions.commitmentLevel,
    description: "(Tu nivel de compromiso determinará tu éxito)",
    subtext: "El 91% de las personas que seleccionaron nivel 4 reconquistaron a su ex en menos de 21 días usando el PLAN A.",
    options: standardOptions.commitmentLevel,
    note: "Solo trabajo con personas decididas a transformar su situación amorosa. El PLAN A fue desarrollado para quien está preparado para actuar.",
    elements: {
      thermometer: true,
      ...commonElements.profileAnalysis("85%")
    }
  },

  // STEP 10 - ANÁLISE DO ESPECIALISTA
  {
    id: 10,
    question: "EXPERTO ANALIZANDO TU CASO...",
    description: "Espera mientras analizo tus respuestas para crear tu estrategia personalizada.",
    options: [],
    autoAdvance: true,
    elements: {
      ...commonElements.expertPhoto(),
      autoMessage: "Basándome en 7 años de experiencia ayudando a personas como tú...",
      ...commonElements.profileAnalysis("90%")
    }
  },

  // STEP 11 - RESULTADO DA ANÁLISE
  {
    id: 11,
    question: "¡FELICITACIONES! He analizado tus respuestas y tengo buenas noticias para ti.",
    description: "Basándome en tu perfil y situación específica, el PLAN A tiene un 90,5% de probabilidades de funcionar en tu caso.",
    options: ["¿VAMOS AL SIGUIENTE PASO?"],
    note: "Estoy aquí para guiarte personalmente en este viaje de reconquista. En los últimos 7 años, he ayudado a más de 3.847 personas a recuperar sus relaciones usando este método exclusivo.",
    elements: {
      ...commonElements.expertPhoto(),
      ...commonElements.profileAnalysis("95%"),
      helpedCounter: "Personas ayudadas hoy: 17",
      compatibilityCalc: "90,5%"
    }
  },

  // STEP 12 - PLANO PRONTO
  {
    id: 12,
    question: "¡TU PLAN DE ACCIÓN PERSONALIZADO ESTÁ LISTO!",
    description: "Basado en tus respuestas, he creado la estrategia exacta para que recuperes a tu amor.",
    options: ["¡QUIERO VER MI PLAN AHORA!"],
    note: "Prepárate para descubrir los pasos que te llevarán al éxito.",
    elements: {
      finalReveal: true,
      profileComplete: "100%"
    }
  }
]

// ===== BÔNUS DETALHADOS =====
export const bonuses = [
  {
    id: 1,
    title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
    value: 47,
    description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    details: [
      "✓ 7 Gatillos de Nostalgia", 
      "✓ 7 Gatillos de Curiosidad", 
      "✓ 7 Gatillos de Deseo"
    ]
  },
  {
    id: 2,
    title: "PROTOCOLO DE EMERGENCIA 72H",
    value: 37,
    description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    details: [
      "✓ Plan de Acción Inmediata", 
      "✓ Independencia Emocional", 
      "✓ Comunicación Magnética"
    ]
  }
]

// ===== DEPOIMENTOS COMPLETOS =====
export const testimonials = [
  {
    name: "Carlos M., 34 años",
    text: "¡Volvió a responderme al 3er día y me propuso vernos al 6º día!",
    rating: 5
  },
  {
    name: "Rafael, 32 años",
    text: "Estaba perdido después de la ruptura. El Plan A me dio dirección y confianza. ¡Hoy estamos más unidos que nunca!",
    rating: 5
  },
  {
    name: "André, 28 años",
    text: "En solo 2 semanas siguiendo el Plan A, logré reconquistar a mi ex. ¡Los guiones funcionaron perfectamente!",
    rating: 5
  },
  {
    name: "Marcelo, 41 años",
    text: "Después de 6 meses separados, pensé que ya no tenía oportunidad. En el día 12 del Plan A me llamó llorando queriendo volver.",
    rating: 5
  }
]

// ===== MENSAGENS DE PROVA SOCIAL =====
export const socialProofMessages = [
  "¡Estás entre el 17% más decidido a reconquistar!",
  "¡Tu perfil muestra compatibilidad!",
  "¡Bonificación liberada por desbloqueo!",
  "¡Has desbloqueado los 2 bonos - valor total de $84!",
  "El 87% de las personas en tu situación lograron resultados en menos de 14 días",
  "Estás más comprometido que el 73% de las personas que hicieron esta prueba",
  "¡Tu caso tiene características prometedoras para el éxito!",
  "¡Análisis completo - perfil optimizado para reconquista!",
  "¡Estrategia personalizada lista para implementar!",
  "¡Plan A activado - resultados en menos de 21 días!"
]

// ===== FUNÇÃO UTILITÁRIA MELHORADA =====
export function getPersonalizedContent(content, gender) {
  // Verificação de tipos mais robusta
  if (!content) return ""
  
  if (typeof content === "string") return content
  
  if (typeof content === "object" && content !== null) {
    // Normalizar gender para lowercase
    const normalizedGender = gender?.toLowerCase()
    
    // Verificar se tem opções por gênero
    if (content.masculino && content.feminino) {
      return normalizedGender === "masculino" ? content.masculino : content.feminino
    }
    
    // Se for array, retornar como está
    if (Array.isArray(content)) return content
    
    // Retornar o próprio objeto se não for específico por gênero
    return content
  }
  
  return content
}

// ===== CONFIGURAÇÕES EXPORTADAS =====
export { QUIZ_CONFIG, EXPERT_IMAGE, commonElements, standardOptions, genderSpecificOptions }
