import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './style';

const Home = () => {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/c68970dc89ee4217beb3a83a01259c66_9366/Tenis_X_PLR_Preto_CQ2405_01_standard.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
};

export default Home;
