export const company = {
  name: 'F. H. Ribeiro',
  legalName: 'F. H. Ribeiro Serviços da Construção Civil LTDA',
  cnpj: '42.040.332/0001-40',
  address: 'Av. Bady Bassitt, 3355 — Boa Vista, São José do Rio Preto/SP, 15015-700',
  phone: '+55 17 99711-7534',
  whatsappNumber: '5517997117534',
  whatsappMessage:
    'Oi, quero contratar seus serviços, pode me ajudar?',
  social: {
    facebook: 'https://www.facebook.com/fhribeirorp/',
    instagram: 'https://www.instagram.com/fhribeiro.com.br/',
    youtube: 'https://www.youtube.com/@fhribeiro6493',
  },
};

export const whatsappLink = `https://api.whatsapp.com/send?phone=${company.whatsappNumber}&text=${encodeURIComponent(
  company.whatsappMessage,
)}`;
