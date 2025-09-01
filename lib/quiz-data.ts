export const quizSteps = [
  {
    id: 1,
    question: "¡NO DEJES QUE LA PERSONA QUE AMAS SALGA DE TU VIDA PARA SIEMPRE!",
    description: "Haz la prueba rápida de 2 minutos y descubre cómo aplicar el PLAN A - en tu caso específico.",
    subtext: "Selecciona tu género:",
    options: ["MASCULINO", "FEMENINO"],
    warning:
      "⚠️ ATENCIÓN: ¡Este método comprobado solo debe usarse si estás 100% comprometido en reconquistar tu amor perdido!",
    elements: {
      heartbeat: true,
      timer: "Prueba de 2 minutos",
    },
  },
  {
    id: 2,
    question: "¿CUÁL ES TU EDAD?",
    description: "(Esta información es crucial para personalizar tu plan de reconquista)",
    options: [
      "18-29 - Fase de descubrimientos emocionales",
      "29-39 - Período de consolidación de valores",
      "39-49 - Momento de reevaluación de prioridades",
      "50+ - Fase de madurez emocional",
    ],
    elements: {
      ageIcons: true,
      counter: "personas que ya hicieron la prueba hoy",
    },
  },
  {
    id: 3,
    question: "¿CUÁNTO TIEMPO LLEVAN SEPARADOS?",
    description: "(El tiempo es un factor crítico para tu estrategia de reconquista)",
    options: {
      masculino: ["Menos de una semana", "Hace 1 mes", "De 2 a 6 meses", "Más de 6 meses"],
      feminino: ["Menos de una semana", "Hace 1 mes", "De 2 a 6 meses", "Más de 6 meses"],
    },
    bonusUnlock: {
      id: 1,
      title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
      value: 47,
      description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    },
  },
  {
    id: 4,
    question: {
      masculino: "¿CÓMO FUE SU SEPARACIÓN?",
      feminino: "¿CÓMO FUE SU SEPARACIÓN?",
    },
    description: "(Esta información es vital para determinar tu estrategia específica)",
    options: {
      masculino: ["Ella terminó conmigo", "Yo terminé con ella", "Decidimos terminar de mutuo acuerdo"],
      feminino: ["Él terminó conmigo", "Yo terminé con él", "Decidimos terminar de mutuo acuerdo"],
    },
    elements: {
      analysisText: "Calculando tasa de éxito para tu caso...",
      successRate: "¡Tu caso tiene características prometedoras!",
    },
  },
  {
    id: 5,
    question: "¿CUÁNTO TIEMPO ESTUVIERON JUNTOS?",
    description: "(La duración de la relación influye directamente en tu estrategia)",
    options: ["Más de 3 años", "De 1 a 3 años", "De 6 meses a 1 año", "Menos de 6 meses"],
  },
  {
    id: 6,
    question: "¿CUÁL FUE LA PARTE MÁS DOLOROSA DE LA RUPTURA?",
    description: "(Identificar tu dolor principal es esencial para tu recuperación emocional y reconquista)",
    options: {
      masculino: [
        "😔 Lidiar con la soledad y el vacío",
        "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
        "😐 Lidiar con recuerdos y memorias",
        "💔 Imaginarla con otro hombre",
        "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
        "⚡ Otro",
      ],
      feminino: [
        "😔 Lidiar con la soledad y el vacío",
        "😢 La montaña rusa emocional: ira, tristeza, arrepentimiento",
        "😐 Lidiar con recuerdos y memorias",
        "💔 Imaginarlo con otra mujer",
        "🤔 Darme cuenta de que los planes que hicimos nunca se harán realidad",
        "⚡ Otro",
      ],
    },
    elements: {
      profileAnalysis: "Personalizando tu estrategia emocional...",
      profileComplete: "46%",
    },
  },
  {
    id: 7,
    question: {
      masculino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
      feminino: "¿CUÁL ES TU SITUACIÓN ACTUAL CON TU EX?",
    },
    description: "(Esta información determinará tu punto de partida en el PLAN A)",
    options: {
      masculino: [
        "🧐 Estoy aplicando contacto cero",
        "😢 Ella me ignora completamente",
        "❌ Me ha bloqueado en todas las redes sociales",
        "🤝 Hablamos solo de cosas necesarias",
        "🤔 Charlamos de vez en cuando",
        "😌 Seguimos siendo amigos",
        "🔥 Hemos tenido encuentros íntimos después de la ruptura",
      ],
      feminino: [
        "🧐 Estoy aplicando contacto cero",
        "😢 Él me ignora completamente",
        "❌ Me ha bloqueado en todas las redes sociales",
        "🤝 Hablamos solo de cosas necesarias",
        "🤔 Charlamos de vez en cuando",
        "😌 Seguimos siendo amigos",
        "🔥 Hemos tenido encuentros íntimos después de la ruptura",
      ],
    },
    elements: {
      profileComplete: "62%",
      testimonialImage: "",
    },
  },
  {
    id: 8,
    question: {
      masculino: "¿ELLA YA ESTÁ SALIENDO CON OTRA PERSONA?",
      feminino: "¿ÉL YA ESTÁ SALIENDO CON OTRA PERSONA?",
    },
    description: "(Esta información es crucial para definir tu enfoque estratégico)",
    options: {
      masculino: [
        "🚫 No, está soltera",
        "🤔 No estoy seguro",
        "😔 Sí, está saliendo con alguien",
        "💔 Sí, tiene una relación seria",
        "🔄 Está saliendo con varias personas",
      ],
      feminino: [
        "🚫 No, está soltero",
        "🤔 No estoy segura",
        "😔 Sí, está saliendo con alguien",
        "�� Sí, tiene una relación seria",
        "🔄 Está saliendo con varias personas",
      ],
    },
    bonusUnlock: {
      id: 2,
      title: "PROTOCOLO DE EMERGENCIA 72H",
      value: 37,
      description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    },
    elements: {
      profileComplete: "77%",
    },
  },
  {
    id: 9,
    question: {
      masculino: "¿CUÁNTO QUIERES RECUPERARLA?",
      feminino: "¿CUÁNTO QUIERES RECUPERARLO?",
    },
    description: "(Tu nivel de compromiso determinará tu éxito)",
    subtext:
      "El 91% de las personas que seleccionaron nivel 4 reconquistaron a su ex en menos de 21 días usando el PLAN A.",
    options: ["1 - No estoy seguro", "2 - Me lo estoy pensando", "3 - Lo quiero bastante", "4 - Lo quiero muchísimo"],
    note: "Solo trabajo con personas decididas a transformar su situación amorosa. El PLAN A fue desarrollado para quien está preparado para actuar.",
    elements: {
      thermometer: true,
      profileComplete: "85%",
    },
  },
  {
    id: 10,
    question: "EXPERTO ANALIZANDO TU CASO...",
    description: "Espera mientras analizo tus respuestas para crear tu estrategia personalizada.",
    options: [],
    autoAdvance: true,
    elements: {
      expertPhoto: true,
      expertImage: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-01T212625.544.png",
      autoMessage: "Basándome en 7 años de experiencia ayudando a personas como tú...",
      profileComplete: "90%",
    },
  },
  {
    id: 11,
    question: "¡FELICITACIONES! He analizado tus respuestas y tengo buenas noticias para ti.",
    description:
      "Basándome en tu perfil y situación específica, el PLAN A tiene un 90,5% de probabilidades de funcionar en tu caso.",
    options: ["¿VAMOS AL SIGUIENTE PASO?"],
    note: "Estoy aquí para guiarte personalmente en este viaje de reconquista. En los últimos 7 años, he ayudado a más de 3.847 personas a recuperar sus relaciones usando este método exclusivo.",
    elements: {
      expertPhoto: true,
      expertImage: "https://optimalhealthscout.shop/wp-content/uploads/2025/06/imagem_gerada-2025-06-01T212625.544.png",
      profileComplete: "95%",
      helpedCounter: "Personas ayudadas hoy: 17",
      compatibilityCalc: "90,5%",
    },
  },
  {
    id: 12,
    question: "¡ANÁLISIS COMPLETO DE TU CASO ESPECÍFICO!",
    description: "Basándome en TUS respuestas exactas, tu caso tiene características excepcionales.",
    subtext: "He identificado 3 'CÓDIGOS DE RECONQUISTA' únicos en tu perfil que explican tu alto potencial de éxito.",
    options: ["¡QUIERO VER MIS 3 CÓDIGOS ESPECÍFICOS!"],
    elements: {
      personalizedSuccessRate: true, // Calculado dinámicamente entre 80-82%
      profileComplete: "98%",
      personalizedCodes: {
        temporal: "Protocolo de Nostalgia Acelerada",
        emotional: "Disparadores de Arrepentimiento",
        strategic: "Técnica del Contacto Magnético"
      },
      comparisonData: {
        general: "19%",
        basic: "47%",
        userProfile: "calculated" // Será calculado dinamicamente
      },
      specificTestimonial: {
        name: "Carlos M., 34 años",
        similarity: "89% similar al tuyo",
        text: "Mis 3 códigos eran prácticamente idénticos a los tuyos. Mi tasa calculada era 80,7%. Resultado real: ella me escribió en el día 8 pidiendo vernos. Hoy llevamos 5 meses juntos de nuevo.",
        image: "https://comprarplanseguro.shop/wp-content/uploads/2025/06/prova-nova-espanha-face.png",
        verified: true
      },
      urgencyElements: {
        spotsRemaining: 23,
        exclusiveAccess: "Solo personas con tu perfil específico (80%+ de éxito) verán esta estrategia hoy",
        scarcityMessage: "Acceso limitado para casos de alto potencial"
      },
      codePreview: [
        "🔐 CÓDIGO #1: Tu tiempo de separación activa el...",
        "🔐 CÓDIGO #2: Tu tipo de ruptura permite usar...",
        "🔐 CÓDIGO #3: Tu situación actual habilita la..."
      ]
    },
  },
  {
    id: 13,
    question: "¡AQUÍ ESTÁN TUS 3 CÓDIGOS DE RECONQUISTA!",
    description: "Basándome en tu análisis personalizado, estos son los códigos específicos que maximizan tu éxito:",
    subtext: "Con tu tasa de éxito personalizada, estos códigos te colocan en el TOP 8% de casos más prometedores.",
    options: ["¡QUIERO ACCESO COMPLETO AL PLAN A PERSONALIZADO!"],
    note: "⚠️ IMPORTANTE: Estos códigos son específicos para tu situación. La estrategia completa está disponible en el siguiente paso.",
    elements: {
      revealedCodes: true,
      personalizedStrategy: true,
      profileComplete: "99%",
      mysteryReveal: false, // Ya revelamos na etapa anterior
      successPattern: "calculated", // Usar o valor calculado
      offerPreview: {
        product: "PLAN A COMPLETO PERSONALIZADO",
        includes: "Estrategia + 3 Códigos Específicos + Bonos",
        urgency: "Acceso limitado por perfil de alto potencial"
      }
    },
  },
  {
    id: 14,
    question: "¡AQUÍ ESTÁ TU PLAN A PERSONALIZADO COMPLETO!",
    description: "Tu estrategia específica basada en tus 3 códigos de reconquista y tu tasa de éxito personalizada.",
    subtext: "Con tu perfil de alto potencial, tienes acceso prioritario a la metodología completa que ha funcionado para casos similares al tuyo.",
    options: ["¡QUIERO ACCESO INMEDIATO AL PLAN A!"],
    note: "🎯 Tu estrategia personalizada incluye los pasos exactos, cronograma específico y scripts adaptados a tu situación única.",
    elements: {
      finalOffer: true,
      profileComplete: "100%",
      strategyPreparation: false, // Ya está preparada
      anticipationBuilder: false, // Ya construimos a expectativa
      personalizedPlan: {
        successRate: "calculated",
        codes: "revealed",
        timeline: "21 días adaptado a tu caso",
        guarantee: "30 días de garantía"
      },
      finalUrgency: {
        timer: "2 horas restantes",
        spots: "12 accesos disponibles",
        exclusivity: "Solo para perfiles de 80%+ de éxito"
      }
    },
  },
]

export const bonuses = [
  {
    id: 1,
    title: "21 DISPARADORES EMOCIONALES QUE FUNCIONAN",
    value: 47,
    description: "Las 21 frases exactas que hacen que piense en ti obsesivamente.",
    details: ["✓ 7 Gatillos de Nostalgia", "✓ 7 Gatillos de Curiosidad", "✓ 7 Gatillos de Deseo"],
  },
  {
    id: 2,
    title: "PROTOCOLO DE EMERGENCIA 72H",
    value: 37,
    description: "Qué hacer cuando todo parece perdido y tienes 72 horas para actuar.",
    details: ["✓ Plan de Acción Inmediata", "✓ Independencia Emocional", "✓ Comunicación Magnética"],
  },
]

export const testimonials = [
  {
    name: "Carlos M., 34 años",
    text: "¡Volvió a responderme al 3er día y me propuso vernos al 6º día!",
    rating: 5,
    similarity: "89%",
    successRate: "80,7%",
    verified: true
  },
  {
    name: "Rafael, 32 años", 
    text: "Estaba perdido después de la ruptura. El Plan A me dio dirección y confianza. ¡Hoy estamos más unidos que nunca!",
    rating: 5,
    similarity: "76%",
    successRate: "81,3%",
    verified: true
  },
  {
    name: "André, 28 años",
    text: "En solo 2 semanas siguiendo el Plan A, logré reconquistar a mi ex. ¡Los guiones funcionaron perfectamente!",
    rating: 5,
    similarity: "82%", 
    successRate: "79,8%",
    verified: true
  },
  {
    name: "Marcelo, 41 años",
    text: "Después de 6 meses separados, pensé que ya no tenía oportunidad. En el día 12 del Plan A me llamó llorando queriendo volver.",
    rating: 5,
    similarity: "71%",
    successRate: "80,9%", 
    verified: true
  },
]

export const socialProofMessages = [
  "¡Estás entre el 17% más decidido a reconquistar!",
  "¡Tu perfil muestra compatibilidad excepcional!",
  "¡Bonificación liberada por perfil de alto potencial!",
  "¡Has desbloqueado los 2 bonos - valor total de $84!",
  "El 87% de las personas en tu situación lograron resultados en menos de 14 días",
  "Estás más comprometido que el 73% de las personas que hicieron esta prueba",
  "¡Tu tasa de éxito supera el promedio en +60 puntos!",
  "¡Perfil de alto potencial detectado!",
  "¡Acceso prioritario activado por códigos únicos!",
  "¡Tu caso está en el TOP 8% más prometedor!",
]

// Función utilitaria para personalizar textos basados en el género
export function getPersonalizedContent(content: any, gender: string) {
  if (typeof content === "string") {
    return content
  }

  if (typeof content === "object" && content !== null) {
    if (content.masculino && content.feminino) {
      return gender === "MASCULINO" ? content.masculino : content.feminino
    }
    return content
  }

  return content
}

// Función para calcular tasa de éxito personalizada (80-82%)
export function calculatePersonalizedSuccessRate(userAnswers) {
  let baseRate = 76; // Base para alcanzar 80-82%
  
  // Ajustes baseados no tempo de separação
  if (userAnswers.timeApart === "Menos de una semana") baseRate += 4;
  if (userAnswers.timeApart === "Hace 1 mes") baseRate += 3;
  if (userAnswers.timeApart === "De 2 a 6 meses") baseRate += 2;
  if (userAnswers.timeApart === "Más de 6 meses") baseRate += 1;
  
  // Ajustes baseados na situação atual
  if (userAnswers.currentSituation && userAnswers.currentSituation.includes("amigos")) baseRate += 3;
  if (userAnswers.currentSituation && userAnswers.currentSituation.includes("encuentros íntimos")) baseRate += 4;
  if (userAnswers.currentSituation && userAnswers.currentSituation.includes("charlamos")) baseRate += 2;
  
  // Ajustes baseados no comprometimento
  if (userAnswers.commitment === "4 - Lo quiero muchísimo") baseRate += 2;
  if (userAnswers.commitment === "3 - Lo quiero bastante") baseRate += 1;
  
  // Garantir faixa 80-82%
  return Math.min(Math.max(baseRate, 80), 82);
}

// Função para gerar códigos personalizados
export function generatePersonalizedCodes(userAnswers) {
  const temporalCodes = {
    "Menos de una semana": "Protocolo de Nostalgia Acelerada",
    "Hace 1 mes": "Técnica de Reconexión Gradual",
    "De 2 a 6 meses": "Estrategia de Redescubrimiento",
    "Más de 6 meses": "Método de Reactivación Profunda"
  };
  
  const emotionalCodes = {
    "Ella terminó conmigo": "Disparadores de Arrepentimiento",
    "Yo terminé con ella": "Activadores de Nostalgia",
    "Decidimos terminar de mutuo acuerdo": "Técnicas de Reconexión Mutua"
  };
  
  const strategicCodes = {
    "amigos": "Técnica del Contacto Magnético",
    "charlamos": "Método de Escalada Emocional", 
    "encuentros íntimos": "Protocolo de Reconquista Acelerada",
    "contacto cero": "Estrategia de Reaparición Impactante"
  };
  
  return {
    temporal: temporalCodes[userAnswers.timeApart] || "Protocolo Personalizado",
    emotional: emotionalCodes[userAnswers.breakupType] || "Disparadores Específicos",
    strategic: getStrategicCode(userAnswers.currentSituation, strategicCodes)
  };
}

function getStrategicCode(currentSituation, strategicCodes) {
  if (!currentSituation) return "Técnica Personalizada";
  
  for (const [key, value] of Object.entries(strategicCodes)) {
    if (currentSituation.toLowerCase().includes(key)) {
      return value;
    }
  }
  
  return "Técnica del Contacto Estratégico";
}
