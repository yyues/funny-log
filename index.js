class Logger {
  constructor() {}
  /**
   * logger 配置项
   */
  config = {
    primary: "#007aff",
    success: "#4cd964",
    warning: "#f0ad4e",
    error: "#dd524d",
  };
  /**
   *
   * @param {String} str
   * @description output a text with success color in console
   */
  success(str) {
    console(`%c${str}`, `color:${this.config.success}`);
  }
  /**
   *
   * @param {String} str
   * @description output a text with warning color in console
   */
  warning(str) {
    console(`%c${str}`, `color:${this.config.warning}`);
  }
  /**
   *
   * @param {String} str
   * @description output a text with error color in console
   */
  error(str) {
    console(`%c${str}`, `color:${this.config.error}`);
  }
  /**
   *
   * @param {String} url
   * @param {String} style
   * @description output a picture in console
   */
  picture(
    url,
    style = "padding-left:80px;padding-bottom: 80px;border-radius:50%;"
  ) {
    console.log("%c", `background: url(${url}) no-repeat center;${style}`);
  }
}
export default new Logger();
