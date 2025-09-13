"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  Shield,
  ArrowRight,
  Check,
  Clock,
  Users,
  Heart,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { enviarEvento } from "../../lib/analytics"

export default function ResultPageOptimized() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [recentBuyers, setRecentBuyers] = useState(3)
  const [userGender, setUserGender] = useState<string>("")
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedGender = localStorage.getItem("userGender")
    if (savedGender) setUserGender(savedGender)

    setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    // Simular compradores recientes
    const interval = setInterval(() => {
      setRecentBuyers((prev) => {
        const increase = Math.floor(Math.random() * 2) + 1
        return Math.min(prev + increase, 23)
      })
    }, 45000)

    // Registra visualización
    try {
      enviarEvento("visualizou_resultado")
    } catch (error) {
      console.error("Error al registrar evento:", error)
    }

    // Carrega script do VTurb
    const loadVTurbScript = () => {
      if (!document.querySelector('script[src*="68c4d37225b572b8e09566cf"]')) {
        const script = document.createElement("script")
        script.src = "https://scripts.converteai.net/498be6ac-2d19-4386-aba2-c11c84449107/players/68c4d37225b572b8e09566cf/v4/player.js"
        script.async = true
        document.head.appendChild(script)
      }
    }

    loadVTurbScript()

    return () => clearInterval(interval)
  }, [])

  const handlePurchase = () => {
    try {
      enviarEvento("clicou_comprar", {
        posicao: "principal",
      })
    } catch (error) {
      console.error("Error al registrar evento de clic:", error)
    }
    window.open("https://pay.hotmart.com/F100142422S?off=qqcmu6vg&checkoutMode=10", "_blank")
  }

  const getPersonalizedPronoun = () => {
    return userGender === "FEMININO" ? "él" : "ella"
  }

  const handleTouchFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(50)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-x-hidden" ref={contentRef}>
      
      {/* ✅ SEÇÃO 1: RESULTADO INICIAL ENXUTO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          className="relative z-10 px-4 py-8 text-center"
        >
          {/* Headline Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            🎯 <span className="text-orange-400">¡FELICITACIONES!</span>
            <br />
            TU CASO TIENE <span className="text-green-400">90,5%</span>
            <br />
            DE PROBABILIDAD DE ÉXITO
          </h1>

          {/* Resultado Visual Simples */}
          <div className="max-w-sm mx-auto mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 border-4 border-yellow-400 rounded-2xl p-6 shadow-2xl">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-white mb-4">
                <div className="text-center">
                  <span className="text-2xl font-extrabold text-black">90,5%</span>
                  <p className="text-xs font-bold text-black">ÉXITO</p>
                </div>
              </div>
              
              <div className="text-white space-y-2">
                <p><strong>Tiempo estimado:</strong> 14-21 días</p>
                <p><strong>Estrategia:</strong> Plan A</p>
                <p><strong>Tipo:</strong> Altamente recuperable</p>
              </div>
            </div>
          </div>

          {/* Transição para VSL */}
          <p className="text-xl text-gray-300 mb-4 font-semibold">
            Ahora descubre <span className="text-orange-400 font-bold">cómo es posible</span> este resultado:
          </p>
        </motion.div>
      </div>

      {/* ✅ SEÇÃO 2: VSL PRINCIPAL (POSIÇÃO OTIMIZADA) */}
      <div className="px-4 py-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              🎯 <span className="text-orange-400">EL MÉTODO</span> QUE HACE POSIBLE TU RESULTADO
            </h2>
            
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-lg text-gray-300 mb-4">
                Mira este video donde 3 especialistas revelan:
              </p>
              <div className="text-left bg-black/30 rounded-lg p-4 space-y-2">
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Por qué tu caso tiene <strong className="text-orange-400">90,5% de éxito</strong></span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Los <strong className="text-orange-400">3 disparadores</strong> que funcionan en 21 días</span>
                </div>
                <div className="flex items-center text-white">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>Cómo aplicarlo <strong className="text-orange-400">paso a paso</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* VSL CENTRALIZADA COM VTURB */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-3xl">
              <div className="relative bg-black rounded-2xl p-4 border-4 border-orange-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl animate-pulse"></div>
                <div className="relative z-10">
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

          {/* CTA ÚNICO APÓS VSL */}
          <div className="text-center">
            <div className="bg-orange-600 text-white py-3 px-6 rounded-full inline-block font-bold text-lg mb-6 animate-bounce">
              👆 APLICA ESTO Y VERÁS RESULTADOS EN DÍAS
            </div>

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full max-w-md mx-auto bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-black py-6 px-8 rounded-full text-xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-yellow-400 min-h-[64px] flex items-center justify-center"
                onTouchStart={handleTouchFeedback}
              >
                <Heart className="w-6 h-6 mr-2 flex-shrink-0" />
                <span className="text-center leading-tight">QUIERO APLICAR ESTE MÉTODO - $14</span>
                <ArrowRight className="w-6 h-6 ml-2 flex-shrink-0" />
              </Button>
            </motion.div>

            <p className="text-white text-lg font-semibold mt-4">
              Ahora que conoces el método, es hora de <span className="text-orange-400">ponerlo en práctica</span>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ SEÇÃO 3: PROVA SOCIAL RÁPIDA (1 DEPOIMENTO EM VÍDEO) */}
      <div className="px-4 py-8 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              💬 <span className="text-orange-400">TESTIMONIO REAL</span> DE QUIEN YA LO LOGRÓ
            </h3>
            <p className="text-gray-300">
              Escucha la historia de transformación usando exactamente el mismo método
            </p>
          </div>

          {/* Depoimento em Vídeo Centralizado */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xs">
              <div className="relative bg-black rounded-2xl p-2 border-2 border-orange-500 shadow-xl overflow-hidden">
                
                {/* Header do Story */}
                <div className="flex items-center p-2 pb-1">
                  <div className="w-8 h-8 rounded-full border border-orange-400 overflow-hidden mr-2 flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">FB</span>
                    </div>
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <h4 className="text-white font-bold text-xs truncate">Facundo B.</h4>
                    <p className="text-green-400 text-xs font-semibold">✅ Reconciliado en 15 días</p>
                  </div>
                </div>

                {/* Vídeo Story - Mantendo Wistia para o depoimento */}
                <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden" style={{height: '280px'}}>
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/3rj8vdh574.js" async type="module"></script>
                  <wistia-player 
                    media-id="3rj8vdh574" 
                    aspect="0.5625"
                    className="w-full h-full"
                  ></wistia-player>
                </div>

                {/* Footer com CTA */}
                <div className="p-2 text-center">
                  <Button
                    onClick={handlePurchase}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-2 px-3 rounded-full text-xs shadow-lg transition-all duration-300 min-h-[36px] flex items-center justify-center"
                    onTouchStart={handleTouchFeedback}
                  >
                    <Play className="w-3 h-3 mr-1 flex-shrink-0" />
                    <span className="truncate">QUIERO LOS MISMOS RESULTADOS</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Números de Prova Social */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-4 rounded-lg border border-orange-500 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">87%</div>
              <p className="text-white text-sm">Ven resultados en 14 días</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-orange-500 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">3.847+</div>
              <p className="text-white text-sm">Relaciones recuperadas</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-orange-500 text-center">
              <div className="text-2xl font-bold text-orange-400 mb-1">21</div>
              <p className="text-white text-sm">Días o menos</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ SEÇÃO 4: OFERTA FINAL SIMPLIFICADA */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl border-4 border-yellow-400">
            <CardContent className="p-6 sm:p-8 text-center">
              
              {/* Badge de Oferta */}
              <div className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full inline-block mb-6 text-lg">
                🔥 OFERTA ESPECIAL - SOLO HOY
              </div>

              <h2 className="text-3xl sm:text-4xl font-black mb-6">PLAN A - RECUPERACIÓN RÁPIDA</h2>

              {/* Preço Simples */}
              <div className="bg-black/20 rounded-lg p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-6xl font-black text-yellow-300 mb-2">$14</div>
                  <div className="text-xl">
                    <span className="line-through text-gray-400 mr-3">$97</span>
                    <span className="text-green-400 font-bold">AHORRAS $83</span>
                  </div>
                </div>

                {/* O que inclui */}
                <div className="text-left space-y-3 max-w-md mx-auto">
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Sistema completo Plan A</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>21 Disparadores Emocionales ($47)</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Protocolo de Emergencia 72H ($37)</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Garantía 30 días</span>
                  </div>
                  <div className="flex items-center text-white">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Acceso inmediato</span>
                  </div>
                </div>
              </div>

              {/* CTA Principal Único */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="mb-6"
              >
                <Button
                  onClick={handlePurchase}
                  size="lg"
                  className="w-full max-w-lg mx-auto bg-yellow-500 hover:bg-yellow-600 text-black font-black py-6 px-8 rounded-full text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-white min-h-[72px] flex items-center justify-center"
                  onTouchStart={handleTouchFeedback}
                >
                  <span className="text-center leading-tight">💕 RECUPERAR AHORA POR $14</span>
                  <ArrowRight className="w-6 h-6 ml-2 flex-shrink-0" />
                </Button>
              </motion.div>

              {/* Urgência Final */}
              <div className="bg-red-800 p-4 rounded-lg mb-4">
                <p className="text-yellow-300 font-bold text-lg mb-2">⏰ OFERTA EXPIRA EN:</p>
                <div className="text-3xl font-black text-white">
                  <CountdownTimer minutes={15} seconds={0} />
                </div>
              </div>

              {/* Social Proof Final */}
              <div className="flex justify-center gap-4 text-sm text-white mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-orange-400 mr-1" />
                  <span><strong>{recentBuyers}</strong> compraron hoy</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-400 mr-1" />
                  <span>Últimas horas</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ✅ SEÇÃO 5: GARANTIA SIMPLES */}
      <div className="px-4 py-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-green-50 border-4 border-green-400 shadow-2xl">
            <CardContent className="p-6 text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">GARANTÍA TOTAL DE 30 DÍAS</h2>
              <p className="text-green-700 text-lg font-semibold mb-4">
                Si no ves resultados, te devolvemos el 100% de tu dinero
              </p>
              <p className="text-green-600 max-w-2xl mx-auto">
                Prueba el método durante 30 días. Si no funciona, te devolvemos todo sin hacer preguntas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ✅ SEÇÃO 6: FAQ MÍNIMO (SÓ 3 PERGUNTAS) */}
      <div className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">PREGUNTAS FRECUENTES</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-orange-400 mb-2">
                  ¿Y si {getPersonalizedPronoun()} ya está con otra persona?
                </h3>
                <p className="text-gray-300 text-sm">
                  El método funciona incluso cuando hay terceras personas. El 67% de nuestros casos exitosos comenzaron en esta situación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-orange-400 mb-2">¿Cuánto tiempo tarda en ver resultados?</h3>
                <p className="text-gray-300 text-sm">
                  El 87% ve cambios positivos en menos de 14 días. El sistema completo funciona en 21 días máximo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border border-gray-700">
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-orange-400 mb-2">¿Cómo recibo el acceso?</h3>
                <p className="text-gray-300 text-sm">
                  Inmediatamente después del pago recibes un email con tus credenciales. Todo queda disponible al momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ✅ CTA FINAL URGENTE */}
      <div className="px-4 py-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border-4 border-yellow-400">
            <h2 className="text-3xl font-black text-white mb-4">⏰ ÚLTIMA OPORTUNIDAD</h2>
            <p className="text-xl text-white mb-6 font-semibold">
              Esta oferta expira en minutos. Después vuelve a $97.
            </p>

            <div className="bg-red-800 p-4 rounded-lg mb-6">
              <p className="text-yellow-300 font-bold text-lg mb-2">TIEMPO RESTANTE:</p>
              <div className="text-4xl font-black text-white">
                <CountdownTimer minutes={15} seconds={0} />
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Button
                onClick={handlePurchase}
                size="lg"
                className="w-full max-w-md mx-auto bg-yellow-500 hover:bg-yellow-600 text-black font-black py-6 px-8 rounded-full text-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-white min-h-[72px] flex items-center justify-center"
                onTouchStart={handleTouchFeedback}
              >
                <span className="text-center leading-tight">💕 ¡SÍ, QUIERO RECUPERAR AHORA!</span>
                <ArrowRight className="w-6 h-6 ml-2 flex-shrink-0" />
              </Button>
            </motion.div>

            <p className="text-yellow-300 text-sm mt-4 font-semibold">
              Haz clic ahora antes de que sea demasiado tarde
            </p>
          </div>
        </div>
      </div>

      {/* Estilos CSS Otimizados */}
      <style jsx global>{`
        /* Reset para evitar scroll horizontal */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        .min-h-screen {
          max-width: 100vw;
          overflow-x: hidden;
        }

        /* Estilos para VTurb Player */
        vturb-smartplayer {
          border-radius: 12px !important;
          overflow: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
          display: block !important;
        }

        /* Estilos para o player Wistia (depoimento) */
        wistia-player[media-id='3rj8vdh574']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/3rj8vdh574/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top: 177.78%; 
          width: 100%;
          max-width: 100%;
        }
        
        wistia-player {
          border-radius: 12px !important;
          overflow: hidden;
          width: 100% !important;
          max-width: 100% !important;
        }

        /* Otimizações Mobile */
        @media (max-width: 768px) {
          * {
            max-width: 100vw;
            box-sizing: border-box;
          }

          .text-3xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }

          .text-4xl {
            font-size: 1.875rem !important;
            line-height: 2.25rem !important;
          }

          .text-5xl {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }

          button {
            min-height: 48px !important;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }

          p, span, div {
            line-height: 1.6 !important;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          .px-4 {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .py-8 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }

          .grid {
            gap: 1rem !important;
          }

          .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .min-w-0 {
            min-width: 0 !important;
          }

          /* VTurb responsivo */
          vturb-smartplayer {
            height: auto !important;
            aspect-ratio: 16/9 !important;
          }
        }

        /* Melhorias de performance */
        .bg-gradient-to-r, .bg-gradient-to-br {
          will-change: transform;
          backface-visibility: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        input, select, textarea {
          font-size: 16px !important;
        }

        a, button, [role="button"] {
          min-height: 44px;
          min-width: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Garantir responsividade dos players */
        vturb-smartplayer, wistia-player {
          max-width: 100% !important;
          height: auto !important;
        }

        /* Preload para melhor performance */
        vturb-smartplayer {
          contain: layout style paint;
        }
      `}</style>
    </div>
  )
}
