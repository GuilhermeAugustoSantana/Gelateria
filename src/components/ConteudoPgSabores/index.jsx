import React from "react";

export default function ConteudoPgSabores() {
  return (
    <main>
      <section className="secao-banner-sabores">
        <div>
          <h1 className="titulo">NOSSOS SABORES</h1>
        </div>
      </section>
      <section className="secao-Pgsabores">
        <div className="limitar-secao sabores">
          <h2>SABORES DE SORVETE</h2>
          <div className="box-sabores">
            <div className="sabor">
              <img src="assets/sabor-oreo.png" alt="Sorvete de Oreo" />
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className="sabor">
              <img src="assets/sabor-pistache.png" alt="Sorvete Pistache" />
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className="sabor">
              <img src="assets/sabor-cookies-avela.png" alt="Sorvete Cookies & Avelã" />
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className="sabor">
              <img src="assets/sorbet-kiwi.png" alt="Sorvete de Kiwi" />
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className="sabor">
              <img src="assets/sorbet-morango.png" alt="Sorvete de Morango" />
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className="sabor">
              <img src="assets/sorbet-limao.png" alt="Sorvete de Limão Siciliano" />
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

