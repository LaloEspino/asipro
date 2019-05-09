import React, { Component, Fragment } from 'react'

import '../styles/pages/QuienesSomos.css'

class QuienesSomos extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  constructor(props) {
    super(props)
    this.state = {
      especialidades: [
        {
          heading: 'headingOne',
          colapse: 'collapseOne',
          titulo: 'Sistemas de Detección de Incendio',
          texto: 'Independientemente de que hoy en día la prevención de incendio es una norma prevista por la Secretaría del Trabajo y Previsión Social (STPS), consideramos de vital importancia el analizar junto con el cliente cuales sería el sistema óptimo de detección rápida en caso de incendio, determinando el mínimo de detectores que el local y las zonas a proteger requieran. Esto se lleva a cabo cubriendo los requisitos mínimos establecidos por la guía de códigos locales o nacionales para la aplicación de sistemas de detección de incendio así como los requisitos de las autoridades gubernamentales.'
        },
        {
          heading: 'headingTwo',
          colapse: 'collapseTwo',
          titulo: 'Circuito Cerrado de Televisión (CCTV)',
          texto: 'La necesidad de sentir y mantener la seguridad en nuestro entorno que pueda contemplar la grabación de los eventos solo es posible con un sistema de Circuito Cerrado de TV(CCTV), ya que por medio de una o varias cámaras, monitores, grabador analógico o digital que permite ver lo que acontece incluso vía remota(Internet) y hasta una impresora de video, podemos obtener un registro minucioso de la actividad en diferentes sitios.'
        },
        {
          heading: 'headingThree',
          colapse: 'collapseThree',
          titulo: 'Sistemas de Control de Acceso ',
          texto: 'Un sistema integral de control de acceso permite contar con el registro de entrada y salida del personal mediante al uso de: tarjetas de proximidad, banda magnética, teclado, registro biométrico. Los sistemas de control de acceso que proponemos tienen un diseño modular, completo e independiente y pueden conectarse a configuraciones de puertas múltiples que se adaptan a las necesidades de los clientes y si se requiere, permite tener un registro histórico de todas las transacciones o eventos.'
        },
        {
          heading: 'headingFour',
          colapse: 'collapseFour',
          titulo: 'Sistemas de Alarmas Contra Robo y Asalto ',
          texto: 'Al activarse un sistema de alarma nulifica el propósito del intruso o bien previene la sustracción de mercancía u otros objetos. Un sistema de alarma proporciona tranquilidad al propietario y reduce costos por robos o daños a equipo o material confidencial.'
        },
        {
          heading: 'headingFive',
          colapse: 'collapseFive',
          titulo: 'Detectores de armas y metales ',
          texto: 'Utilizado hoy día en muchos lugares de acceso público y privado en la revisión de la persona. Un sistema de detección de armas y metales proporcionar seguridad y evitar cualquier intento de atento a la seguridad en el interior del local.'
        },
        {
          heading: 'headingSix',
          colapse: 'collapseSix',
          titulo: 'Detectores de narcóticos y explosivos ',
          texto: 'Una realidad hoy en día ha motivado la supervisión de las personas y cosas para evitar la introducción y portación de narcóticos y explosivos a recintos públicos o privados. Existen sistemas y máquinas orientadas al control de estos aspectos.'
        }
      ]
    }
  }

  render() {

    const especialidades = this.state.especialidades.map((especialidad) =>
      <Fragment key={especialidad.heading}>
        <div className='card'>
          <div className='card-header bg-dark' id={especialidad.heading}>
            <h5 className='mb-0'>
              <button className='btn btn-link text-light' data-toggle='collapse' data-target={'#' + especialidad.colapse} aria-expanded='true' aria-controls={especialidad.colapse}>
                {especialidad.titulo}
              </button>
            </h5>
          </div>

          <div id={especialidad.colapse} className='collapse' aria-labelledby={especialidad.heading} data-parent='#accordion'>
            <div className='card-body'>
              {especialidad.texto}
            </div>
          </div>
        </div>
      </Fragment>
    )

    return (
      <Fragment>
        <div className='container'>
          <h1 className='mt-5'>Quiénes Somos</h1>

          <p>
            Una Empresa que nace con la finalidad de satisfacer las demandas de Seguridad Patrimonial.
          </p>

          <p>
            Iniciamos nuestras actividades el primero de Junio de 1989 con el objeto de prestar servicios en el ramo de la asesoría, venta e instalación de equipos y sistemas de seguridad con la finalidad de atender la creciente demanda para la protección del patrimonio.
          </p>

          <p>
            En la actualidad nos hemos consolidado como empresa líder en el mercado de la seguridad lo que nos ha permitido diversificar nuestras líneas de servicio abarcando toda la república. Nuestra preparación y experiencia nos avala para atender las necesidades del cliente en todas las áreas de la seguridad.
          </p>

          <h3 className='mt-5 mb-3'>Objetivos</h3>

          <p>
            Nuestro propósito inicial es definir en forma integral las necesidades específicas de cada cliente y nuestro objetivo, el proporcionarle la mejor solución técnica utilizando productos de la mejor calidad y precio adecuado, complementado con mano de obra altamente calificada, buscando ante todo, su satisfacción.
          </p>

          <h3 className='mt-5 mb-3'>Nuestras Especialidades</h3>

          <p>
            Contamos con las siguientes áreas:
          </p>

          <div id='accordion'>

            {especialidades}

          </div>

          <h3 className='mt-5 mb-3'>Nuestros Recursos</h3>

          <p>
            Nuestros recursos humanos son la base de nuestro servicio. Nuestro personal se capacita continuamente de tal forma que nuestros clientes siempre podrán estar seguros de recibir un trabajo profesional.
          </p>

        </div>
      </Fragment>
    )
  }
}

export default QuienesSomos
