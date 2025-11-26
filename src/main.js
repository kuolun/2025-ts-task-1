"use strict";
// --- 題目一：變數宣告型別定義 ---
// 說明：請為以下變數補上正確型別（數字、字串、布林、字串陣列、帶型別的物件）。
// 目標：能直接通過型別檢查與基本值檢查。
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPlant = exports.cartPlant = exports.inventory = exports.fetchPlants = exports.calcTotal = exports.fiddleLeafFig = exports.snakePlant = exports.catKeyName = exports.PlantCategory = exports.cart = exports.plant = exports.tags = exports.isAvailable = exports.plantName = exports.plantId = void 0;
exports.updatePlant = updatePlant;
exports.plantId = 101;
exports.plantName = '琴葉榕（Fiddle Leaf Fig）';
exports.isAvailable = true;
exports.tags = ['大型植栽', '室內明亮散射光'];
exports.plant = {
    id: 101,
    name: '琴葉榕',
    price: 2500,
};
exports.cart = [
    { sku: 'PLANT-1001', name: '虎尾蘭', qty: 2, price: 480 },
    { sku: 'PLANT-2001', name: '龜背芋', qty: 1, price: 1200, potColor: '白' },
];
// --- 題目二：Enum（定義 & 反向映射） ---
// 說明：請定義 PlantCategory Enum，並示範反向映射。
// 目標：理解 Enum 定義與反向映射的寫法。
var PlantCategory;
(function (PlantCategory) {
    PlantCategory[PlantCategory["LargePlant"] = 0] = "LargePlant";
    PlantCategory[PlantCategory["MediumPlant"] = 1] = "MediumPlant";
    PlantCategory[PlantCategory["SmallPlant"] = 2] = "SmallPlant";
})(PlantCategory || (exports.PlantCategory = PlantCategory = {}));
exports.catKeyName = PlantCategory[PlantCategory.LargePlant];
console.log(exports.catKeyName);
console.log(PlantCategory.LargePlant);
exports.snakePlant /* TODO: OnShelfPlant */ = {
    id: 2,
    name: '虎尾蘭',
    price: 480,
    sku: 'PLANT-1001',
    quantity: 42,
};
// export interface PlantItem 組合 Price, Shippable 並包含 id/name
exports.fiddleLeafFig /* TODO: PlantItem */ = {
    id: 101,
    name: '琴葉榕',
    price: 2500,
    currency: 'TWD',
    weightKg: 8.2,
    shipFrom: 'Taipei',
};
var calcTotal /* TODO: CalcTotalFn */ = function (items, coupon) {
    var subtotal = items.reduce(function (sum, it) { return sum + it.price * it.qty; }, 0);
    if (!coupon)
        return subtotal;
    if (coupon.type === 'percent')
        return Math.max(0, Math.round(subtotal * (1 - coupon.amount / 100)));
    return Math.max(0, subtotal - coupon.amount);
};
exports.calcTotal /* TODO: CalcTotalFn */ = calcTotal;
// --- 題目六：Generics + API 應用（使用 axios)  ---
// 說明：import axios 與 AxiosResponse，定義 PlantDTO，實作 fetchPlants。
// API: https://fakestoreapi.com/products
// 目標：理解泛型定義與應用。
var axios_1 = require("axios"); /* TODO */
var fetchPlants = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios_1.default.get('https://fakestoreapi.com/products')];
    });
}); };
exports.fetchPlants = fetchPlants;
function updatePlant(input) {
    var _a;
    var existing = {
        id: 1,
        name: '虎尾蘭',
        price: 480,
        description: '耐陰、淨化空氣',
    };
    var merged = __assign(__assign({}, existing), input);
    return {
        id: merged.id,
        name: merged.name,
        price: merged.price,
        description: (_a = merged.description) !== null && _a !== void 0 ? _a : '',
    };
}
exports.inventory /* TODO */ = {
    'PLANT-1001': 42,
    'PLANT-2001': 8,
};
exports.cartPlant /* TODO */ = { id: 101, name: '琴葉榕', price: 2500 };
exports.publicPlant /* TODO */ = {
    id: 101,
    name: '琴葉榕',
    price: 2500,
    currency: 'TWD',
};
// --- 題目十：綜合練習 ---
// 說明：這是一個後台新增商品的功能，請將以下需求用 TypeScript 實作。
/* 1️⃣ 定義 type Product
    產品資料結構如下：
    - id: 字串
    - title: 字串
    - category: 字串
    - description: 字串
    - origin_price: 數字
    - price: 數字
    - is_enabled: 布林
    - unit: 字串
    - imageUrl: 字串
    - imagesUrl: 字串陣列（非必要）
*/
/*
2️⃣ 定義 type CreateProduct
由 Product 衍生，但不包含 id（使用 Omit）
*/
/*
3️⃣ 定義 type UpdateProduct
由 Product 衍生，id, title 必須有，其餘皆可選（使用 Partial 與 Omit）
*/
/*
4️⃣ 實作函式 submitProduct(type, product)
參數說明：
- type 僅能是 "create" 或 "update"
- 若 type === "create"，參數型別應為 CreateProduct
- 若 type === "update"，參數型別應為 UpdateProduct
函式回傳字串：
create → "新增商品成功：${product.title}"
update → "更新商品成功：${product.id}"
*/
