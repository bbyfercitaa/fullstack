import MegaOffer from '../components/organisms/MegaOffer';
import FeaturedProducts from '../components/organisms/FeaturedProducts';
import Collaborators from '../components/organisms/Collaborators';
import '../styles/Home.css';

function Contactos() {
  return (
    <div className="home-page">
      <MegaOffer />

      <main className="about-container">
        <section className="about-hero">
          <h1>Sobre Nuestra Empresa</h1>
          <p>
            Somos una empresa comprometida con ofrecer productos y servicios de
            alta calidad. Nuestro equipo trabaja cada día para innovar y brindar
            experiencias excepcionales a nuestros clientes.
          </p>
        </section>

        <section className="about-sections">
          <article className="about-card">
            <h2>Misión</h2>
            <p>
              Entregar soluciones que mejoren la vida de las personas mediante
              productos accesibles, sostenibles y con un excelente servicio al
              cliente.
            </p>
          </article>

          <article className="about-card">
            <h2>Visión</h2>
            <p>
              Ser referentes en nuestro sector, reconocidos por la calidad,
              innovación y responsabilidad social, expandiendo nuestra presencia
              a nuevos mercados.
            </p>
          </article>

          <article className="about-card">
            <h2>Valores</h2>
            <ul>
              <li>Integridad</li>
              <li>Innovación</li>
              <li>Compromiso con el cliente</li>
              <li>Sostenibilidad</li>
            </ul>
          </article>
        </section>

        <section className="about-history">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada hace varios años por profesionales apasionados, nuestra
            empresa ha crecido gracias a la confianza de nuestros clientes y al
            esfuerzo constante por mejorar. Hoy seguimos manteniendo esos
            principios fundacionales mientras miramos hacia el futuro.
          </p>
        </section>
      </main>

      <FeaturedProducts />
      <Collaborators />
    </div>
  );
}

export default Contactos;