import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="hero hero--primary">
        <div style={{justifyContent: 'center', textAlign: 'center'}} className="container">
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          
          <Link style={{width: '25%'}}
            className="button button--secondary button--lg margin-top--md"
            to="/docs/intro"
          >
            Início
        </Link>
        </div>
      </header>
      <div style={{textAlign: 'center', width: '100%', marginTop: '2rem' }}>
        <p className="margin-top--md" style={{maxWidth: '40%', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.1rem'}}>
            O <strong>{siteConfig.title}</strong> é um aplicativo de estudo colaborativo 
            que transforma rotina em desafio saudável.
            Reúna seus amigos em grupos de estudo, registre o tempo dedicado a cada sessão e
            acompanhe em tempo real quem está cumprindo (ou ultrapassando) suas metas diárias.
          </p>
      </div>
    </Layout>
  );
}