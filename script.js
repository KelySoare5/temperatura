var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var form = document.querySelector('form#form-inputs');
var input_text = document.querySelector('input#cidade_digitada');
var button = document.querySelector("button#btn_pesquisar_cidade");
var apresentacao = document.querySelector('section#apresentarDados');
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (evento) { return __awaiter(_this, void 0, void 0, function () {
    var localizacao, reposta, dados, infos, alterarTema, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // evita o recarregamento da pagina
                evento.preventDefault();
                // Se input nao for encontrado returna
                if (!input_text || !apresentacao)
                    return [2 /*return*/];
                localizacao = input_text.value;
                if (localizacao.length === 0) {
                    window.alert("Digite o nome da cidade");
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(localizacao, "&appid=390cb8c8fb7ea2e4f3023ae18eda0de2&lang=pt_br&units=metric"))];
            case 2:
                reposta = _a.sent();
                return [4 /*yield*/, reposta.json()];
            case 3:
                dados = _a.sent();
                console.log(dados);
                infos = {
                    temperatura: Math.round(dados.main.temp),
                    cidade: dados.name,
                    descricao: dados.weather[0].description,
                    icon: "https://openweathermap.org/img/wn/".concat(dados.weather[0].icon, "@2x.png")
                };
                // console.log(infos)
                apresentacao.innerHTML =
                    "\n        <div class=\"dados-temperatura\">\n        <p class=\"cidade\">".concat(infos.cidade, "</p>\n        <h2 class=\"temp\"> ").concat(infos.temperatura, "\u00B0C </h2>\n        </div>\n        <div class=\"img\">\n            <p class=\"img_descricao\">").concat(infos.descricao, "</p>\n            <img class=\"imgIcon\" src=\"").concat(infos.icon, "\">\n        </div>\n        \n        ");
                alterarTema = dados.weather[0].main;
                backgroundBody(alterarTema);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                window.alert("Por favor, digite uma cidade!");
                console.log("Erro: ", err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
function backgroundBody(img) {
    var backgroundImage;
    switch (img) {
        case 'Clear':
            backgroundImage = 'imagens/ceu-limpo.jpg'; // Caminho da imagem de sol
            break;
        case 'Clouds':
            backgroundImage = 'imagens/Nuvens-quebradas.jpg'; // Caminho da imagem de chuva
            break;
        case 'rain':
            backgroundImage = 'imagens/chuva.jpg';
            break;
        default:
            backgroundImage = 'imagens/Poucas-nuvens.jpg'; // Caminho da imagem padrão
            break;
    }
    // Altera o estilo do body para usar a nova imagem de fundo
    document.body.style.backgroundImage = "url(".concat(backgroundImage, ")");
}
