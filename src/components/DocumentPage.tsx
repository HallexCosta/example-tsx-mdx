import React from 'react';

const DocumentPage: React.FC = () => {
  return (
    <div className="document-page max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Termos de Serviço e Política de Privacidade</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
        <p className="mb-4">
          Bem-vindo aos Termos de Serviço e Política de Privacidade da nossa plataforma. 
          Este documento estabelece as regras e diretrizes para o uso de nossos serviços.
        </p>
        <p className="mb-4">
          Ao acessar e utilizar nossa plataforma, você concorda com os termos aqui estabelecidos.
          Recomendamos a leitura atenta deste documento antes de prosseguir.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Definições</h2>
        <p className="mb-4">Para os fins deste documento, os seguintes termos terão os significados abaixo:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Plataforma:</strong> Refere-se ao conjunto de serviços e funcionalidades disponibilizados
            através do nosso website e aplicativos.
          </li>
          <li>
            <strong>Usuário:</strong> Qualquer pessoa que acesse ou utilize a Plataforma.
          </li>
          <li>
            <strong>Conteúdo:</strong> Informações, dados, textos, imagens e outros materiais disponibilizados
            através da Plataforma.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Uso da Plataforma</h2>
        <p className="mb-4">Ao utilizar nossa Plataforma, você concorda em:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fornecer informações precisas e atualizadas</li>
          <li>Manter a confidencialidade de sua conta</li>
          <li>Não utilizar a Plataforma para fins ilícitos</li>
          <li>Respeitar os direitos de propriedade intelectual</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Privacidade e Proteção de Dados</h2>
        <p className="mb-4">
          Nossa política de privacidade descreve como coletamos, utilizamos e protegemos suas informações pessoais.
          Para mais detalhes, consulte nossa{' '}
          <a href="/privacidade" className="text-blue-600 hover:underline">
            Política de Privacidade completa
          </a>.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Dados Coletados</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Informações de cadastro</li>
            <li>Dados de uso da plataforma</li>
            <li>Informações de dispositivo</li>
            <li>Cookies e tecnologias similares</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Responsabilidades</h2>
        <p className="mb-4">Nossas responsabilidades incluem:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Manter a Plataforma disponível e funcionando adequadamente
          </li>
          <li>
            Proteger os dados dos usuários de acordo com a LGPD
          </li>
          <li>
            Fornecer suporte técnico quando necessário
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Contato</h2>
        <p className="mb-4">
          Para questões relacionadas a estes termos, entre em contato através do email{' '}
          <a href="mailto:legal@empresa.com" className="text-blue-600 hover:underline">
            legal@empresa.com
          </a>
          {' '}ou pelo telefone (11) 1234-5678.
        </p>
      </section>

      <footer className="text-sm text-gray-600 mt-8 pt-4 border-t">
        <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      </footer>
    </div>
  );
};

export default DocumentPage; 