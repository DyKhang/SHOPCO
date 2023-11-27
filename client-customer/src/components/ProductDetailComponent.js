import axios from "axios";
import React, { Component } from "react";
import withRouter from "../utils/withRouter";
import MyContext from "../contexts/MyContext";

class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1,
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="align-center product-detail-container">
          <h2 className="text-center ">PRODUCT DETAILS</h2>
          <figure className="caption-right">
            <div class="product-detail-img-wrap">
              <img
                src={"data:image/jpg;base64," + prod.image}
                width="400px"
                height="400px"
                alt=""
              />
            </div>
            <figcaption class="product-info">
              <form>
                <table>
                  <tbody class="product-info-tbody">
                    <tr class="product-info__id">
                      <td align="right">ID:</td>
                      <td>{prod._id}</td>
                    </tr>
                    <tr class="product-detail-name">
                      <td>{prod.name}</td>
                    </tr>
                    <tr class="product-detail-rate">
                      <td>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="23"
                          viewBox="0 0 25 23"
                          fill="none"
                        >
                          <path
                            d="M12.3562 0L15.8569 7.53796L24.1077 8.53794L18.0204 14.1966L19.619 22.3526L12.3562 18.3119L5.09341 22.3526L6.69201 14.1966L0.604756 8.53794L8.85555 7.53796L12.3562 0Z"
                            fill="#FFC633"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="23"
                          viewBox="0 0 12 23"
                          fill="none"
                        >
                          <path
                            d="M4.73719 22.3526L12 18.3119V0L8.49932 7.53796L0.248535 8.53793L6.33579 14.1966L4.73719 22.3526Z"
                            fill="#FFC633"
                          />
                        </svg>
                      </td>
                      <span>4.5/5</span>
                    </tr>
                    <tr class="product-detail-price">
                      <td align="right">Price:</td>
                      <td>{prod.price}$</td>
                      <td class="discount">
                        <span>-20%</span>
                      </td>
                    </tr>
                    <tr class="product-detail-type">
                      <td align="right">Type:</td>
                      <td>{prod.category.name}</td>
                    </tr>
                    <tr class="product-detail-size">
                      <td>
                        <p class="choose-size">Choose size: </p>
                      </td>
                      <td>
                        <input
                          class="size-check"
                          type="radio"
                          id="size1"
                          name="size"
                          hidden
                        />
                        <label for="size1" class="size-button">
                          Small
                        </label>
                      </td>
                      <td>
                        <input
                          class="size-check"
                          type="radio"
                          id="size2"
                          name="size"
                          hidden
                        />
                        <label for="size2" class="size-button">
                          Medium
                        </label>
                      </td>
                      <td>
                        <input
                          class="size-check"
                          type="radio"
                          id="size3"
                          name="size"
                          hidden
                        />
                        <label for="size3" class="size-button">
                          Large
                        </label>
                      </td>
                      <td>
                        <input
                          class="size-check"
                          type="radio"
                          id="size4"
                          name="size"
                          hidden
                        />
                        <label for="size4" class="size-button">
                          X-Large
                        </label>
                      </td>
                    </tr>
                    <tr class="product-detail-quantity">
                      <td align="right">Quantity:</td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={this.state.txtQuantity}
                          onChange={(e) => {
                            this.setState({ txtQuantity: e.target.value });
                          }}
                        />
                      </td>
                    </tr>
                    <tr class="product-detail-add">
                      <td>
                        <button
                          type="submit"
                          onClick={(e) => this.btnAdd2CartClick(e)}
                        >
                          ADD TO CART
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </figcaption>
          </figure>
          <section class="reviews">
            <div class="reviews__numbers-block">
              <span class="reviews__title">All Reviews</span>
              <span class="reviews__number">(451)</span>
            </div>
            <input
              type="checkbox"
              id="load-more"
              class="load-more-check"
              hidden
            />
            <div class="reviews__rates">
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Samantha D.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p class="reviews-rate__date">Posted on August 14, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Alex M.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "The t-shirt exceeded my expectations! The colors are vibrant
                  and the print quality is top-notch. Being a UI/UX designer
                  myself, I'm quite picky about aesthetics, and this t-shirt
                  definitely gets a thumbs up from me."
                </p>
                <p class="reviews-rate__date">Posted on August 15, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Ethan R.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "This t-shirt is a must-have for anyone who appreciates good
                  design. The minimalistic yet stylish pattern caught my eye,
                  and the fit is perfect. I can see the designer's touch in
                  every aspect of this shirt."
                </p>
                <p class="reviews-rate__date">Posted on August 16, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Olivia P.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "As a UI/UX enthusiast, I value simplicity and functionality.
                  This t-shirt not only represents those principles but also
                  feels great to wear. It's evident that the designer poured
                  their creativity into making this t-shirt stand out."
                </p>
                <p class="reviews-rate__date">Posted on August 17, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Samantha D.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "I absolutely love this t-shirt! The design is unique and the
                  fabric feels so comfortable. As a fellow designer, I
                  appreciate the attention to detail. It's become my favorite
                  go-to shirt."
                </p>
                <p class="reviews-rate__date">Posted on August 14, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Alex M.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "The t-shirt exceeded my expectations! The colors are vibrant
                  and the print quality is top-notch. Being a UI/UX designer
                  myself, I'm quite picky about aesthetics, and this t-shirt
                  definitely gets a thumbs up from me."
                </p>
                <p class="reviews-rate__date">Posted on August 15, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Ethan R.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "This t-shirt is a must-have for anyone who appreciates good
                  design. The minimalistic yet stylish pattern caught my eye,
                  and the fit is perfect. I can see the designer's touch in
                  every aspect of this shirt."
                </p>
                <p class="reviews-rate__date">Posted on August 16, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Olivia P.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "As a UI/UX enthusiast, I value simplicity and functionality.
                  This t-shirt not only represents those principles but also
                  feels great to wear. It's evident that the designer poured
                  their creativity into making this t-shirt stand out."
                </p>
                <p class="reviews-rate__date">Posted on August 17, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Liam K.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "This t-shirt is a fusion of comfort and creativity. The
                  fabric is soft, and the design speaks volumes about the
                  designer's skill. It's like wearing a piece of art that
                  reflects my passion for both design and fashion."
                </p>
                <p class="reviews-rate__date">Posted on August 18, 2023</p>
              </article>
              <article class="reviews-rate">
                <div class="reviews-rate__stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                  >
                    <path
                      d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                      fill="#FFC633"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                  >
                    <path
                      d="M4.36433 20.4229L11.0001 16.731V0L7.80167 6.8872L0.263184 7.80085L5.82492 12.971L4.36433 20.4229Z"
                      fill="#FFC633"
                    />
                  </svg>
                </div>
                <div class="reviews-rate__name-block">
                  <h3 class="reviews-rate__name">Ava H.</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M12 2.82898C10.0716 2.82898 8.18657 3.40081 6.58319 4.47215C4.97982 5.54349 3.73013 7.06624 2.99218 8.84782C2.25422 10.6294 2.06114 12.5898 2.43735 14.4811C2.81355 16.3724 3.74215 18.1097 5.10571 19.4733C6.46928 20.8368 8.20656 21.7654 10.0979 22.1416C11.9892 22.5178 13.9496 22.3248 15.7312 21.5868C17.5127 20.8489 19.0355 19.5992 20.1068 17.9958C21.1782 16.3924 21.75 14.5073 21.75 12.579C21.7473 9.99396 20.7192 7.51559 18.8913 5.6877C17.0634 3.85982 14.585 2.83171 12 2.82898ZM16.2806 10.8596L11.0306 16.1096C10.961 16.1793 10.8783 16.2347 10.7872 16.2724C10.6962 16.3101 10.5986 16.3296 10.5 16.3296C10.4014 16.3296 10.3038 16.3101 10.2128 16.2724C10.1218 16.2347 10.039 16.1793 9.96938 16.1096L7.71938 13.8596C7.57865 13.7189 7.49959 13.528 7.49959 13.329C7.49959 13.13 7.57865 12.9391 7.71938 12.7984C7.86011 12.6576 8.05098 12.5786 8.25 12.5786C8.44903 12.5786 8.6399 12.6576 8.78063 12.7984L10.5 14.5187L15.2194 9.79835C15.2891 9.72867 15.3718 9.6734 15.4628 9.63568C15.5539 9.59797 15.6515 9.57856 15.75 9.57856C15.8486 9.57856 15.9461 9.59797 16.0372 9.63568C16.1282 9.6734 16.2109 9.72867 16.2806 9.79835C16.3503 9.86804 16.4056 9.95076 16.4433 10.0418C16.481 10.1329 16.5004 10.2304 16.5004 10.329C16.5004 10.4275 16.481 10.5251 16.4433 10.6162C16.4056 10.7072 16.3503 10.7899 16.2806 10.8596Z"
                      fill="#01AB31"
                    />
                  </svg>
                </div>
                <p class="reviews-rate__desc">
                  "I'm not just wearing a t-shirt; I'm wearing a piece of design
                  philosophy. The intricate details and thoughtful layout of the
                  design make this shirt a conversation starter."
                </p>
                <p class="reviews-rate__date">Posted on August 19, 2023</p>
              </article>
            </div>
            <label class="reviews__btn" for="load-more">
              <span>Load More Reviews</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </label>
          </section>
          <footer class="footer">
            <div class="footer-banner">
              <h3 class="footer-banner__title">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h3>
              <form class="footer-banner__form">
                <input
                  class="footer-banner__email"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                ></input>
                <svg
                  class="footer-banner__letter"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
                <button class="footer-banner__btn" type="submit" name="submit">
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
            <div class="footer__content">
              <div class="footer__column">
                <svg
                  class="footer__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                >
                  <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
                <p class="footer__desc">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
                <div class="footer__socials">
                  <div class="footer__social-wrap">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2071 1.9831C10.7881 2.16933 10.3458 2.28573 9.88023 2.35557C10.3458 2.07622 10.7183 1.63392 10.8812 1.0985C10.4389 1.35457 9.95006 1.5408 9.41465 1.6572C8.99562 1.2149 8.39037 0.935547 7.73856 0.935547C6.48149 0.935547 5.45721 1.95982 5.45721 3.21689C5.45721 3.40312 5.48049 3.56608 5.52705 3.72903C3.64145 3.63591 1.94208 2.72803 0.801411 1.33129C0.615178 1.68048 0.498783 2.05294 0.498783 2.47196C0.498783 3.26345 0.894527 3.96182 1.52306 4.38084C1.1506 4.35756 0.801411 4.26445 0.475504 4.10149V4.12477C0.475504 5.24216 1.26699 6.17333 2.31455 6.38284C2.12831 6.42939 1.9188 6.45267 1.70929 6.45267C1.56962 6.45267 1.40666 6.42939 1.26699 6.40612C1.56962 7.314 2.40766 7.98909 3.40866 7.98909C2.61717 8.59434 1.63945 8.96681 0.56862 8.96681C0.382388 8.96681 0.196156 8.96681 0.0332031 8.94353C1.05748 9.59534 2.24471 9.96781 3.54833 9.96781C7.76184 9.96781 10.0665 6.47595 10.0665 3.44968C10.0665 3.35656 10.0665 3.24017 10.0665 3.14705C10.5088 2.84443 10.9045 2.44868 11.2071 1.9831Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div class="footer__social-wrap">
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.70873 12.3038V6.75026H0.839844V4.58594H2.70873V2.98981C2.70873 1.13752 3.84005 0.128906 5.49242 0.128906C6.28392 0.128906 6.96418 0.187836 7.16243 0.214175V2.14993L6.01642 2.15045C5.11776 2.15045 4.94376 2.57748 4.94376 3.20411V4.58594H7.08697L6.80791 6.75026H4.94376V12.3038H2.70873Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div class="footer__social-wrap">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.00215 3.52344C6.31413 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93481C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08687 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div class="footer__social-wrap">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.60685 0.226562C3.01591 0.226562 0.126953 3.11552 0.126953 6.70646C0.126953 9.56841 1.98992 11.9984 4.55488 12.8624C4.87888 12.9164 4.98688 12.7274 4.98688 12.5384C4.98688 12.3764 4.98688 11.9714 4.98688 11.4314C3.1779 11.8364 2.79991 10.5674 2.79991 10.5674C2.50291 9.81141 2.07092 9.62241 2.07092 9.62241C1.47693 9.21742 2.12492 9.21742 2.12492 9.21742C2.77291 9.27142 3.1239 9.89241 3.1239 9.89241C3.6909 10.8914 4.63588 10.5944 5.01387 10.4324C5.06787 10.0004 5.22987 9.73041 5.41887 9.56841C3.98789 9.40642 2.47592 8.83942 2.47592 6.35546C2.47592 5.65347 2.71891 5.05948 3.1509 4.62749C3.09691 4.46549 2.85391 3.8175 3.2049 2.89952C3.2049 2.89952 3.74489 2.73752 4.98688 3.57451C5.49987 3.43951 6.06686 3.35851 6.60685 3.35851C7.14684 3.35851 7.71383 3.43951 8.22682 3.57451C9.4688 2.73752 10.0088 2.89952 10.0088 2.89952C10.3598 3.79051 10.1438 4.43849 10.0628 4.62749C10.4678 5.08648 10.7378 5.65347 10.7378 6.35546C10.7378 8.83942 9.22581 9.37942 7.76783 9.54141C8.01083 9.73041 8.19982 10.1354 8.19982 10.7294C8.19982 11.5934 8.19982 12.2954 8.19982 12.5114C8.19982 12.6734 8.30782 12.8894 8.65882 12.8354C11.2238 11.9984 13.0867 9.56841 13.0867 6.70646C13.0867 3.11552 10.1978 0.226562 6.60685 0.226562Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="footer__column">
                <h3 class="footer__title">Company</h3>
                <section class="footer__list">
                  <div class="footer__item">
                    <a href="#!">About</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Features</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Works</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Career</a>
                  </div>
                </section>
              </div>
              <div class="footer__column">
                <h3 class="footer__title">Help</h3>
                <section class="footer__list">
                  <div class="footer__item">
                    <a href="#!">Customer Support</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Delivery Details</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Terms & Conditions</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Privacy Policy</a>
                  </div>
                </section>
              </div>
              <div class="footer__column">
                <h3 class="footer__title">FAQ</h3>
                <section class="footer__list">
                  <div class="footer__item">
                    <a href="#!">Account</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Manage Deliveries</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Orders</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Payments</a>
                  </div>
                </section>
              </div>
              <div class="footer__column">
                <h3 class="footer__title">Resources</h3>
                <section class="footer__list">
                  <div class="footer__item">
                    <a href="#!">Free eBooks</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Development Tutorial</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">How to - Blog</a>
                  </div>
                  <div class="footer__item">
                    <a href="#!">Youtube Playlist</a>
                  </div>
                </section>
              </div>
            </div>
            <div class="footer__copy-right-block">
              <p class="footer__copy-right">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div class="footer__payment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="49"
                  viewBox="0 0 66 49"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_20_320)">
                    <rect
                      x="10"
                      y="5"
                      width="46.6143"
                      height="30.0304"
                      rx="5.37857"
                      fill="white"
                    />
                    <rect
                      x="9.88795"
                      y="4.88795"
                      width="46.8384"
                      height="30.2545"
                      rx="5.49062"
                      stroke="#D6DCE5"
                      stroke-width="0.224107"
                    />
                    <path
                      d="M33.0221 15.121L30.8479 25.2845H28.2188L30.3933 15.121H33.0221ZM44.0838 21.6836L45.468 17.8669L46.2645 21.6836H44.0838ZM47.0172 25.2845H49.4491L47.327 15.121H45.0823C44.5779 15.121 44.1523 15.4144 43.9628 15.8667L40.0184 25.2845H42.7794L43.3275 23.7668H46.7007L47.0172 25.2845ZM40.1554 21.9661C40.1667 19.2836 36.4458 19.1359 36.4715 17.9376C36.4792 17.5725 36.827 17.1852 37.5865 17.0858C37.9638 17.0366 39.0012 16.999 40.1792 17.541L40.6405 15.3857C40.0078 15.1561 39.1936 14.9351 38.1809 14.9351C35.5824 14.9351 33.7533 16.3167 33.7379 18.295C33.7215 19.758 35.0436 20.5745 36.0398 21.0609C37.0641 21.5591 37.4083 21.8782 37.4038 22.3238C37.397 23.0061 36.5867 23.3065 35.8307 23.3184C34.5086 23.3393 33.7414 22.9617 33.1299 22.6767L32.6535 24.9037C33.2676 25.1858 34.4015 25.4309 35.5779 25.4435C38.3395 25.4435 40.1464 24.0789 40.1554 21.9661ZM29.2652 15.121L25.0055 25.2845H22.2258L20.1298 17.1733C20.0024 16.6738 19.8917 16.491 19.5047 16.2803C18.8733 15.9377 17.8294 15.6157 16.911 15.4163L16.9737 15.121H21.4474C22.0174 15.121 22.5305 15.5006 22.6598 16.1571L23.767 22.0388L26.5029 15.121H29.2652Z"
                      fill="#1434CB"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_20_320"
                      x="0.811593"
                      y="0.293736"
                      width="64.9911"
                      height="48.4071"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.448214" />
                      <feGaussianBlur stdDeviation="2.24107" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_20_320"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.48214" />
                      <feGaussianBlur stdDeviation="4.48214" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_20_320"
                        result="effect2_dropShadow_20_320"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_20_320"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="49"
                  viewBox="0 0 66 49"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_20_322)">
                    <rect
                      x="9.61426"
                      y="5"
                      width="46.6143"
                      height="30.0304"
                      rx="5.37857"
                      fill="white"
                    />
                    <rect
                      x="9.5022"
                      y="4.88795"
                      width="46.8384"
                      height="30.2545"
                      rx="5.49062"
                      stroke="#D6DCE5"
                      stroke-width="0.224107"
                    />
                    <path
                      d="M36.2699 13.8484H29.4066V26.1819H36.2699V13.8484Z"
                      fill="#FF5F00"
                    />
                    <path
                      d="M29.8425 20.0151C29.8414 18.8273 30.1105 17.6548 30.6296 16.5864C31.1486 15.518 31.9039 14.5817 32.8383 13.8484C31.6812 12.9389 30.2915 12.3732 28.8282 12.2162C27.3648 12.0591 25.8867 12.3169 24.563 12.9602C23.2392 13.6034 22.1231 14.6061 21.3423 15.8537C20.5614 17.1013 20.1473 18.5434 20.1473 20.0151C20.1473 21.4869 20.5614 22.929 21.3423 24.1766C22.1231 25.4241 23.2392 26.4269 24.563 27.0701C25.8867 27.7133 27.3648 27.9712 28.8282 27.8141C30.2915 27.657 31.6812 27.0914 32.8383 26.1819C31.9039 25.4485 31.1486 24.5122 30.6296 23.4438C30.1105 22.3754 29.8414 21.2029 29.8425 20.0151Z"
                      fill="#EB001B"
                    />
                    <path
                      d="M45.5289 20.0151C45.5289 21.4869 45.1149 22.929 44.3341 24.1765C43.5533 25.4241 42.4372 26.4268 41.1135 27.0701C39.7897 27.7133 38.3117 27.9712 36.8484 27.8141C35.385 27.657 33.9954 27.0914 32.8383 26.1819C33.7719 25.4478 34.5266 24.5113 35.0455 23.4431C35.5645 22.3749 35.8341 21.2028 35.8341 20.0151C35.8341 18.8275 35.5645 17.6554 35.0455 16.5872C34.5266 15.5189 33.7719 14.5825 32.8383 13.8484C33.9954 12.9389 35.385 12.3732 36.8484 12.2162C38.3117 12.0591 39.7897 12.3169 41.1135 12.9602C42.4372 13.6034 43.5533 14.6062 44.3341 15.8537C45.1149 17.1013 45.5289 18.5434 45.5289 20.0151Z"
                      fill="#F79E1B"
                    />
                    <path
                      d="M44.7805 24.8756V24.6231H44.8824V24.5716H44.6231V24.6231H44.7249V24.8756H44.7805ZM45.284 24.8756V24.5711H45.2045L45.1131 24.7805L45.0216 24.5711H44.9421V24.8756H44.9982V24.6459L45.0839 24.8439H45.1421L45.2279 24.6454V24.8756H45.284Z"
                      fill="#F79E1B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_20_322"
                      x="0.425851"
                      y="0.293736"
                      width="64.9911"
                      height="48.4071"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.448214" />
                      <feGaussianBlur stdDeviation="2.24107" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_20_322"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.48214" />
                      <feGaussianBlur stdDeviation="4.48214" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_20_322"
                        result="effect2_dropShadow_20_322"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_20_322"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="49"
                  viewBox="0 0 66 49"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_20_324)">
                    <rect
                      x="9.22852"
                      y="5"
                      width="46.6143"
                      height="30.0304"
                      rx="5.37857"
                      fill="white"
                    />
                    <rect
                      x="9.11646"
                      y="4.88795"
                      width="46.8384"
                      height="30.2545"
                      rx="5.49062"
                      stroke="#D6DCE5"
                      stroke-width="0.224107"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.4257 15.646H16.7382C16.5543 15.646 16.3979 15.7796 16.3692 15.9611L15.2822 22.8518C15.2606 22.9879 15.3659 23.1104 15.5039 23.1104H16.7869C16.9708 23.1104 17.1272 22.9768 17.1559 22.7949L17.4491 20.9364C17.4774 20.7544 17.6342 20.6209 17.8177 20.6209H18.6685C20.4388 20.6209 21.4605 19.7643 21.7274 18.0669C21.8476 17.3243 21.7325 16.7408 21.3846 16.332C21.0027 15.8835 20.3251 15.646 19.4257 15.646ZM19.7358 18.1627C19.5888 19.127 18.852 19.127 18.1395 19.127H17.734L18.0185 17.3261C18.0354 17.2174 18.1297 17.1372 18.2397 17.1372H18.4256C18.9109 17.1372 19.3688 17.1372 19.6054 17.4138C19.7463 17.5789 19.7896 17.824 19.7358 18.1627ZM27.4593 18.1318H26.1723C26.0626 18.1318 25.9679 18.212 25.951 18.3209L25.8941 18.6808L25.804 18.5504C25.5254 18.146 24.9042 18.0109 24.2841 18.0109C22.8618 18.0109 21.6472 19.0879 21.4106 20.5988C21.2877 21.3523 21.4625 22.0729 21.89 22.5755C22.2823 23.0375 22.8435 23.2301 23.511 23.2301C24.6569 23.2301 25.2925 22.4933 25.2925 22.4933L25.235 22.8509C25.2134 22.9877 25.3187 23.1102 25.4558 23.1102H26.6151C26.7995 23.1102 26.955 22.9766 26.9841 22.7948L27.6797 18.3904C27.7017 18.2549 27.5968 18.1318 27.4593 18.1318ZM25.6653 20.6364C25.5411 21.3715 24.9575 21.865 24.2134 21.865C23.8397 21.865 23.5409 21.7452 23.3492 21.5181C23.159 21.2926 23.0866 20.9715 23.1472 20.614C23.2632 19.8851 23.8566 19.3756 24.5894 19.3756C24.9548 19.3756 25.2519 19.4968 25.4476 19.726C25.6436 19.9574 25.7215 20.2804 25.6653 20.6364ZM33.0202 18.1317H34.3135C34.4947 18.1317 34.6003 18.3348 34.4974 18.4833L30.196 24.6914C30.1263 24.792 30.0116 24.8518 29.889 24.8518H28.5973C28.4155 24.8518 28.3093 24.6471 28.4146 24.4982L29.7539 22.6078L28.3294 18.4279C28.2802 18.2826 28.3875 18.1317 28.542 18.1317H29.8128C29.978 18.1317 30.1236 18.24 30.1713 18.398L30.9272 20.9226L32.711 18.2955C32.7809 18.1929 32.8969 18.1317 33.0202 18.1317Z"
                      fill="#253B80"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M47.0427 22.8512L48.1457 15.8345C48.1626 15.7256 48.257 15.6454 48.3666 15.645H49.6083C49.7455 15.645 49.8507 15.7679 49.8291 15.9039L48.7414 22.7943C48.7131 22.9762 48.5567 23.1098 48.3725 23.1098H47.2635C47.1264 23.1098 47.0211 22.9872 47.0427 22.8512ZM38.5958 15.6454H35.9078C35.7243 15.6454 35.5679 15.779 35.5392 15.9605L34.4523 22.8512C34.4306 22.9872 34.5359 23.1098 34.6732 23.1098H36.0524C36.1806 23.1098 36.2903 23.0163 36.3103 22.8891L36.6187 20.9358C36.6471 20.7538 36.8038 20.6203 36.9873 20.6203H37.8377C39.6084 20.6203 40.6298 19.7637 40.897 18.0663C41.0176 17.3237 40.9017 16.7402 40.554 16.3314C40.1723 15.8829 39.4953 15.6454 38.5958 15.6454ZM38.9059 18.1621C38.7593 19.1264 38.0224 19.1264 37.3096 19.1264H36.9044L37.1893 17.3255C37.2063 17.2168 37.2997 17.1366 37.4101 17.1366H37.596C38.081 17.1366 38.5393 17.1366 38.7757 17.4132C38.9168 17.5783 38.9597 17.8234 38.9059 18.1621ZM46.6287 18.1312H45.3426C45.232 18.1312 45.1382 18.2114 45.1216 18.3203L45.0647 18.6802L44.9743 18.5498C44.6957 18.1454 44.0749 18.0103 43.4548 18.0103C42.0325 18.0103 40.8182 19.0873 40.5817 20.5981C40.4591 21.3517 40.6331 22.0723 41.0607 22.5748C41.4536 23.0369 42.0141 23.2294 42.6817 23.2294C43.8276 23.2294 44.463 22.4927 44.463 22.4927L44.4057 22.8503C44.384 22.9871 44.4893 23.1096 44.6274 23.1096H45.7861C45.9696 23.1096 46.126 22.976 46.1548 22.7941L46.8507 18.3898C46.872 18.2543 46.7667 18.1312 46.6287 18.1312ZM44.8349 20.6358C44.7114 21.3709 44.1271 21.8644 43.3828 21.8644C43.0098 21.8644 42.7104 21.7446 42.5186 21.5175C42.3284 21.292 42.2569 20.9709 42.3167 20.6134C42.4333 19.8845 43.026 19.375 43.7588 19.375C44.1243 19.375 44.4213 19.4962 44.6172 19.7253C44.8139 19.9568 44.8918 20.2798 44.8349 20.6358Z"
                      fill="#179BD7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_20_324"
                      x="0.0401087"
                      y="0.293736"
                      width="64.9911"
                      height="48.4071"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.448214" />
                      <feGaussianBlur stdDeviation="2.24107" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_20_324"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.48214" />
                      <feGaussianBlur stdDeviation="4.48214" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_20_324"
                        result="effect2_dropShadow_20_324"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_20_324"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="49"
                  viewBox="0 0 66 49"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_20_326)">
                    <rect
                      x="9.8429"
                      y="5"
                      width="46.6143"
                      height="30.0304"
                      rx="5.37857"
                      fill="white"
                    />
                    <rect
                      x="9.73084"
                      y="4.88795"
                      width="46.8384"
                      height="30.2545"
                      rx="5.49062"
                      stroke="#D6DCE5"
                      stroke-width="0.224107"
                    />
                    <path
                      d="M24.9199 16.0817C25.2309 15.6927 25.4419 15.1704 25.3863 14.6367C24.931 14.6594 24.3755 14.9371 24.0538 15.3264C23.7651 15.6597 23.5095 16.2039 23.5761 16.7152C24.0871 16.7595 24.5977 16.4598 24.9199 16.0817Z"
                      fill="#000008"
                    />
                    <path
                      d="M25.3805 16.8151C24.6383 16.7709 24.0073 17.2363 23.6529 17.2363C23.2983 17.2363 22.7556 16.8373 22.1686 16.8481C21.4045 16.8593 20.6956 17.2913 20.3079 17.9784C19.5105 19.3528 20.0975 21.3916 20.8729 22.511C21.2495 23.0648 21.7034 23.6746 22.3014 23.6527C22.8664 23.6305 23.0879 23.2868 23.7747 23.2868C24.461 23.2868 24.6605 23.6527 25.2587 23.6416C25.8789 23.6305 26.2667 23.0875 26.6433 22.5332C27.0753 21.9019 27.2522 21.2923 27.2633 21.2588C27.2522 21.2477 26.0672 20.7932 26.0562 19.4302C26.0451 18.2889 26.9865 17.746 27.0309 17.7123C26.4992 16.926 25.6685 16.8373 25.3805 16.8151Z"
                      fill="#000008"
                    />
                    <path
                      d="M31.8425 15.2705C33.4556 15.2705 34.5788 16.3824 34.5788 18.0013C34.5788 19.6259 33.4325 20.7435 31.8021 20.7435H30.0161V23.5837H28.7258V15.2705L31.8425 15.2705ZM30.0161 19.6604H31.4967C32.6202 19.6604 33.2596 19.0556 33.2596 18.007C33.2596 16.9586 32.6202 16.3594 31.5025 16.3594H30.0161V19.6604Z"
                      fill="#000008"
                    />
                    <path
                      d="M34.9159 21.8612C34.9159 20.8011 35.7283 20.1501 37.1686 20.0695L38.8277 19.9716V19.505C38.8277 18.8309 38.3725 18.4276 37.6122 18.4276C36.8919 18.4276 36.4426 18.7732 36.3332 19.3148H35.158C35.2271 18.2201 36.1603 17.4136 37.6582 17.4136C39.1273 17.4136 40.0663 18.1914 40.0663 19.4069V23.5837H38.8737V22.5871H38.845C38.4937 23.2611 37.7274 23.6874 36.9324 23.6874C35.7456 23.6874 34.9159 22.95 34.9159 21.8612ZM38.8277 21.3139V20.8358L37.3355 20.9279C36.5923 20.9798 36.1719 21.3081 36.1719 21.8266C36.1719 22.3566 36.6097 22.7023 37.278 22.7023C38.1478 22.7023 38.8277 22.1031 38.8277 21.3139Z"
                      fill="#000008"
                    />
                    <path
                      d="M41.1922 25.8133V24.8051C41.2842 24.8281 41.4915 24.8281 41.5953 24.8281C42.1714 24.8281 42.4825 24.5861 42.6725 23.964C42.6725 23.9524 42.7821 23.5953 42.7821 23.5895L40.593 17.5231H41.9409L43.4735 22.4546H43.4964L45.029 17.5231H46.3425L44.0724 23.9005C43.5542 25.3697 42.955 25.8421 41.6991 25.8421C41.5953 25.8421 41.2842 25.8305 41.1922 25.8133Z"
                      fill="#000008"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_20_326"
                      x="0.654489"
                      y="0.293736"
                      width="64.9911"
                      height="48.4071"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.448214" />
                      <feGaussianBlur stdDeviation="2.24107" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_20_326"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.48214" />
                      <feGaussianBlur stdDeviation="4.48214" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_20_326"
                        result="effect2_dropShadow_20_326"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_20_326"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="49"
                  viewBox="0 0 66 49"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_20_328)">
                    <rect
                      x="9.45715"
                      y="5"
                      width="46.6143"
                      height="30.0304"
                      rx="5.37857"
                      fill="white"
                    />
                    <rect
                      x="9.3451"
                      y="4.88795"
                      width="46.8384"
                      height="30.2545"
                      rx="5.49062"
                      stroke="#D6DCE5"
                      stroke-width="0.224107"
                    />
                    <path
                      d="M31.751 23.6143H30.7025V15.4561H33.482C34.1864 15.4561 34.7871 15.6909 35.2785 16.1605C35.7809 16.6301 36.0321 17.2035 36.0321 17.8806C36.0321 18.5741 35.7809 19.1475 35.2785 19.6116C34.7925 20.0758 34.1919 20.3051 33.482 20.3051H31.751V23.6143ZM31.751 16.4608V19.3058H33.5038C33.9188 19.3058 34.2683 19.1639 34.5414 18.8854C34.8198 18.6069 34.9618 18.2683 34.9618 17.8861C34.9618 17.5093 34.8198 17.1762 34.5414 16.8977C34.2683 16.6083 33.9243 16.4663 33.5038 16.4663H31.751V16.4608Z"
                      fill="#3C4043"
                    />
                    <path
                      d="M38.7732 17.8478C39.5487 17.8478 40.1603 18.0553 40.608 18.4703C41.0558 18.8854 41.2797 19.4533 41.2797 20.1741V23.6143H40.2804V22.8389H40.2367C39.8053 23.4778 39.2265 23.7945 38.5057 23.7945C37.8886 23.7945 37.3753 23.6143 36.9603 23.2484C36.5453 22.8826 36.3378 22.4293 36.3378 21.8833C36.3378 21.3044 36.5562 20.8457 36.9931 20.5072C37.4299 20.1632 38.0142 19.9939 38.7405 19.9939C39.363 19.9939 39.8763 20.1085 40.2749 20.3379V20.0976C40.2749 19.7318 40.1329 19.426 39.8435 19.1693C39.5541 18.9127 39.2156 18.7871 38.8279 18.7871C38.2436 18.7871 37.7794 19.0328 37.4408 19.5297L36.518 18.9509C37.0258 18.2137 37.7794 17.8478 38.7732 17.8478ZM37.419 21.8996C37.419 22.1727 37.5337 22.402 37.7685 22.5822C37.9978 22.7624 38.2709 22.8553 38.5821 22.8553C39.0244 22.8553 39.4176 22.6914 39.7616 22.3638C40.1056 22.0362 40.2804 21.6539 40.2804 21.2116C39.9527 20.955 39.4995 20.8239 38.9152 20.8239C38.4893 20.8239 38.1343 20.9276 37.8504 21.1297C37.561 21.3427 37.419 21.5993 37.419 21.8996Z"
                      fill="#3C4043"
                    />
                    <path
                      d="M46.9807 18.0281L43.4858 26.0662H42.4046L43.7043 23.2539L41.3999 18.0281H42.5412L44.2012 22.0362H44.223L45.8394 18.0281H46.9807Z"
                      fill="#3C4043"
                    />
                    <path
                      d="M27.5806 19.6444C27.5806 19.3026 27.55 18.9755 27.4932 18.6609H23.0985V20.4629L25.6295 20.4635C25.5268 21.0631 25.1965 21.5742 24.6903 21.9149V23.0841H26.1969C27.0766 22.2699 27.5806 21.0664 27.5806 19.6444Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.6908 21.915C24.2714 22.1979 23.7314 22.3633 23.0996 22.3633C21.8791 22.3633 20.8438 21.5409 20.473 20.4324H18.9189V21.6381C19.6888 23.166 21.2713 24.2145 23.0996 24.2145C24.3632 24.2145 25.4247 23.7989 26.1974 23.0836L24.6908 21.915Z"
                      fill="#34A853"
                    />
                    <path
                      d="M20.3266 19.5379C20.3266 19.2266 20.3785 18.9258 20.473 18.6429V17.4372H18.9189C18.6005 18.069 18.4214 18.7821 18.4214 19.5379C18.4214 20.2937 18.601 21.0068 18.9189 21.6386L20.473 20.4329C20.3785 20.15 20.3266 19.8492 20.3266 19.5379Z"
                      fill="#FABB05"
                    />
                    <path
                      d="M23.0996 16.712C23.7892 16.712 24.4068 16.9495 24.8945 17.4137L26.2296 16.0797C25.4187 15.3245 24.3615 14.8608 23.0996 14.8608C21.2719 14.8608 19.6888 15.9093 18.9189 17.4372L20.473 18.6429C20.8437 17.5344 21.8791 16.712 23.0996 16.712Z"
                      fill="#E94235"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_20_328"
                      x="0.268746"
                      y="0.293736"
                      width="64.9911"
                      height="48.4071"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="0.448214" />
                      <feGaussianBlur stdDeviation="2.24107" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_20_328"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4.48214" />
                      <feGaussianBlur stdDeviation="4.48214" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0 0.717647 0 0 0 0.08 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_20_328"
                        result="effect2_dropShadow_20_328"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_20_328"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      );
    }
    return <div />;
  }

  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }
  // apis
  apiGetProduct(id) {
    axios.get("/api/customer/products/" + id).then((res) => {
      const result = res.data;
      this.setState({ product: result });
    });
  }
  // event-handlers
  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);
    if (quantity) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex((x) => x.product._id === product._id); // check if the _id exists in mycart
      if (index === -1) {
        // not found, push newItem
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        // increasing the quantity
        mycart[index].quantity += quantity;
      }
      this.context.setMycart(mycart);
      alert("Success");
    } else {
      alert("Please input quantity");
    }
  }
}
export default withRouter(ProductDetail);
