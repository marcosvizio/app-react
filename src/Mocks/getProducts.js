const products = [
    {
      id:'1', 
      title: "Teclado Redragon Kumara", 
      description: "La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",
      price: 6499.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_668104-MLA44207269301_112020-O.webp",
      category: 'perifericos',
      stock: 15
    },
    {
      id:'2', 
      title: "Mouse Logitech G Series", 
      description: "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios.",
      price: 6999.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_847948-MLA45464989113_042021-O.webp",
      category: 'perifericos',
      stock: 20
    },
    {
      id:'3', 
      title: "Monitor ViewSonic 4K 144Hz", 
      description: "Con tu pantalla LED no solo ahorrás energía, ya que su consumo es bajo, sino que vas a ver colores nítidos y definidos en tus películas o series favoritas.",
      price: 74999.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_783121-MLA48811126787_012022-O.webp",
      category: 'perifericos',
      stock: 10
    },
    {
      id:'4', 
      title: "Notebook MSI Thin", 
      description: "La notebook MSI Thin GF63 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
      price: 164999.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_828478-MLA47861843287_102021-O.webp",
      category: 'notebooks',
      stock: 5
    },
    {
      id:'5', 
      title: "Notebook DELL Inspiron", 
      description: "Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades. Ya sea para conectarte, entretenerte, trabajar o colaborar de manera online, podrás hacerlo de forma segura desde cualquier lugar y en cualquier momento. Su pantalla LED de 15.6' y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
      price: 109999.99,
      pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_784916-MLA49842208283_052022-O.webp",
      category: 'notebooks',
      stock: 8
    }
]

export const getProducts = new Promise ((resolve, rejected) => {
  let condition = true
  if (condition) {
    setTimeout(()=> {
      resolve(products)
    }, 4000)
  }else{
    rejected('Algo salio mal!')
  }
})

