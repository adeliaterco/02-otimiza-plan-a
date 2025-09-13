"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { enviarEvento } from "../../lib/analytics"

export default function ResultPageOptimized() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [userGender, setUserGender] = useState<string>("")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mantém a lógica de carregamento dos dados salvos
    const savedGender = localStorage.getItem("userGender")
    if (savedGender) setUserGender(savedGender)

    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Registra visualização da página de resultado
    try {
      enviarEvento("visualizou_resultado")
      console.log("Evento de visualización registrado con éxito")
    } catch (error) {
      console.error("Error al registrar evento de visualización:", error)
    }

    // Carrega o script do VTurb
    const loadVTurbScript = () => {
      // Remove script existente se houver
      const existingScript = document.querySelector('script[src*="converteai.net"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Cria novo script
      const script = document.createElement("script")
      script.src = "https://scripts.converteai.net/498be6ac-2d19-4386-aba2-c11c84449107/players/68c4d37225b572b8e09566cf/v4/player.js"
      script.async = true
      script.type = "text/javascript"
      
      // Adiciona listener para quando o script carregar
      script.onload = () => {
        console.log("VTurb player script carregado com sucesso")
      }
      
      script.onerror = () => {
        console.error("Erro ao carregar script do VTurb player")
      }

      document.head.appendChild(script)
    }

    // Carrega o script após um pequeno delay para garantir que a página esteja pronta
    const scriptTimeout = setTimeout(loadVTurbScript, 500)

    return () => {
      clearTimeout(scriptTimeout)
    }
  }, [])

  const handlePurchase = () => {
    try {
      enviarEvento("clicou_comprar", {
        posicao: "vsl_page",
      })
    } catch (error) {
      console.error("Error al registrar evento de clic:", error)
    }
    window.open("https://pay.hotmart.com/F100142422S?off=qqcmu6vg&checkoutMode=10", "_blank")
  }

  const getPersonalizedPronoun = () => {
    return userGender === "FEMININO" ? "él" : "ella"
  }

  // Função para feedback táctil em dispositivos móveis
  const handleTouchFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden" ref={contentRef}>
      
      {/* HERO SECTION - VSL PRINCIPAL */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          className="relative z-10 px-4 py-8"
        >
          
          {/* Título da VSL */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 leading-tight px-2">
              🎯 <span className="text-orange-400">¡FELICITACIONES!</span>
              <br />
              <span className="text-green-400">DESCUBRE EL MÉTODO</span> QUE HARÁ QUE
              <br />
              <span className="text-orange-300">{getPersonalizedPronoun().toUpperCase()} REGRESE</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto font-semibold px-4">
              Basándome en tus respuestas, tu caso tiene un <span className="text-green-400 font-bold">90,5% de probabilidad de éxito</span>.
              <br />
              Mira este video hasta el final para descubrir exactamente cómo recuperar la relación.
            </p>
          </div>

          {/* VÍDEO VSL PRINCIPAL - VTURB */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-4xl">
              <div className="relative bg-black rounded-2xl p-2 sm:p-4 border-4 border-orange-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl animate-pulse"></div>
                <div className="relative z-10">
                  {/* Player VTurb */}
                  <vturb-smartplayer 
                    id="vid-68c4d37225b572b8e09566cf" 
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      width: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  ></vturb-smartplayer>
                </div>
              </div>
            </div>
          </div>

          {/* Mensagem de Engajamento */}
          <div className="text-center">
            <div className="bg-orange-600 text-white py-3 px-6 rounded-full inline-block font-bold text-sm sm:text-lg mb-6 animate-pulse">
              👆 MIRA HASTA EL FINAL PARA ACCEDER A LA OFERTA ESPECIAL
            </div>
            
          </div>

        </motion.div>
      </div>

      {/* SEÇÃO DE CREDIBILIDADE MÍNIMA */}
      <div className="px-4 py-8 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-orange-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">3.847+</div>
              <p className="text-white text-sm sm:text-base">Relaciones recuperadas</p>
            </div>
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-orange-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">87%</div>
              <p className="text-white text-sm sm:text-base">Ven resultados en 14 días</p>
            </div>
            <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-orange-500/30">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">21</div>
              <p className="text-white text-sm sm:text-base">Días o menos</p>
            </div>
          </div>
        </div>
      </div>

      {/* ESTILOS CSS OTIMIZADOS */}
      <style jsx global>{`
        /* Reset para evitar scroll horizontal */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        /* Container principal sem overflow */
        .min-h-screen {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Estilos específicos para VTurb Player */
        vturb-smartplayer {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          display: block !important;
        }

        /* Responsividade do player */
        vturb-smartplayer iframe,
        vturb-smartplayer video {
          width: 100% !important;
          height: auto !important;
          border-radius: 12px !important;
        }

        /* Otimizações específicas para mobile */
        @media (max-width: 768px) {
          /* Previne overflow horizontal */
          * {
            max-width: 100vw;
            box-sizing: border-box;
          }

          /* Containers responsivos */
          .container, .max-w-4xl, .max-w-3xl, .max-w-2xl {
            max-width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Textos responsivos */
          .text-3xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }

          .text-4xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }

          /* Player responsivo no mobile */
          vturb-smartplayer {
            width: 100% !important;
            margin: 0 !important;
          }

          /* Melhor legibilidade */
          p, span, div {
            line-height: 1.6 !important;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Espaçamentos otimizados */
          .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .py-8 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }

          /* Grid responsivo */
          .grid {
            gap: 1rem !important;
          }

          .grid-cols-1.sm\:grid-cols-3 {
            grid-template-columns: 1fr !important;
          }

          @media (min-width: 640px) {
            .grid-cols-1.sm\:grid-cols-3 {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
        }

        /* Animações otimizadas para performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Melhorias de performance */
        .bg-gradient-to-r, .bg-gradient-to-br {
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Otimização de imagens */
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Garantir que o player não quebre o layout */
        vturb-smartplayer * {
          max-width: 100% !important;
        }

        /* Melhorar o carregamento do player */
        vturb-smartplayer:not(:defined) {
          display: block;
          width: 100%;
          height: 400px;
          background: linear-gradient(45deg, #1f2937, #374151);
          border-radius: 12px;
          position: relative;
        }

        vturb-smartplayer:not(:defined)::before {
          content: "Carregando player...";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 16px;
          font-weight: bold;
        }

        /* Otimizações para diferentes tamanhos de tela */
        @media (max-width: 480px) {
          vturb-smartplayer:not(:defined) {
            height: 250px;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          vturb-smartplayer:not(:defined) {
            height: 350px;
          }
        }

        @media (min-width: 769px) {
          vturb-smartplayer:not(:defined) {
            height: 450px;
          }
        }
      `}</style>
    </div>
  )
}
