import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';

import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';

const imagesMeat = [
  "/Img/Meat/говяжьявырезка.jpg", "/Img/куриная грудка.jpg", "/Img/свиныерёбра.webp", "/Img/фарш говядина.jpg",
  "/Img/meat5.png", "/Img/meat6.png", "/Img/meat7.png", "/Img/meat8.png",
  "/Img/meat9.png", "/Img/meat10.png", "/Img/meat11.png", "/Img/meat12.png",
  "/Img/meat13.png", "/Img/meat14.png", "/Img/meat15.png", "/Img/meat16.png",
  "/Img/meat17.png", "/Img/meat18.png", "/Img/meat19.png", "/Img/meat20.png"
];


const namesMeat = [
  "Говяжья вырезка", "Куриная грудка", "Свиные ребра", "Фарш говяжий", 
  "Баранина на кости", "Говяжий стейк Рибай", "Куриные ножки", "Свиное филе", 
  "Говяжий язык", "Куриные крылья", "Утка", "Индюшиное филе", 
  "Куриный фарш", "Свиные стейки", "Говяжий гуляш", "Курица целая", 
  "Печень говяжья", "Говяжий хвост", "Свиные отбивные", "Бекон нарезной"
];
const descriptionsMeat = [
  "Сочная и нежная говядина высшего качества для стейков или запекания.",
  "Диетическое мясо с низким содержанием жира, идеально для фитнес-блюд.",
  "Подойдут для запекания или приготовления барбекю.",
  "Подходит для котлет, пельменей или тефтелей.",
  "Насыщенный вкус для приготовления бульонов и плова.",
  "Высококачественное мясо для гриля.",
  "Универсальный продукт для жарки, запекания или тушения.",
  "Нежное мясо для запекания и жарки.",
  "Подходит для варки и добавления в салаты.",
  "Идеально для маринада и гриля.",
  "Отличный выбор для праздничного стола.",
  "Нежное мясо с низким содержанием жира.",
  "Для котлет, запеканок и соусов.",
  "Для жарки или запекания.",
  "Уже порезанное мясо для тушения.",
  "Универсальный продукт для запекания или бульона.",
  "Богата витаминами, подходит для паштетов или жарки.",
  "Идеально для супов.",
  "Для жарки или гриля.",
  "Для завтраков или закусок."
];
const pricesMeat = [
  5400, 2300, 4800, 4100, 6500, 8500, 2100, 5200, 6000, 1900, 
  7900, 4500, 2200, 5400, 4700, 4000, 2700, 3000, 5100, 3000
];
const weightsMeat = [
  "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", 
  "1 кг", "1 кг", "1.5 кг", "1 кг", "1 кг", "1 кг", "1 кг", "2 кг", 
  "1 кг", "1 кг", "1 кг", "500 г"
];

const nameBread = [
  "Пшеничный хлеб", 
  "Ржаной хлеб",   "Багет французский",   "Булочки для бургеров", 
  "Лаваш армянский",   "Хлеб цельнозерновой", 
  "Пицца-сетка",   "Круассаны с шоколадом",   "Печенье овсяное",   "Маффины с черникой"
];

const descriptionsBread = [
  "Хрустящий и мягкий внутри.",
  "Богат клетчаткой и витаминами.",
  "Легкий и воздушный с золотистой корочкой.",
  "Мягкие и идеально подходят для домашних бургеров.",
  "Тонкий и нежный для закусок или шашлыка.",
  "Полезный выбор для завтраков.",
  "С добавлением томатного соуса и сыра.",
  "С нежной начинкой внутри.",
  "Легкий перекус к чаю.",
  "Нежные и сладкие."
];

const pricesBread = [
  300,   350, 
  500,   700,   450, 
  400,   1200,   600,   500,   600
];

const weightsBread = [
  "400 г", "400 г", "300 г", 
  "6 шт",   "500 г",   "400 г", 
  "400 г",  "3 шт", 
  "300 г",   "2 шт"
];

const namesDrinks = [
  "Минеральная вода “Боржоми”", 
  "Апельсиновый сок", 
  "Черный чай", 
  "Зеленый чай с жасмином", 
  "Кофе молотый “Arabica”", 
  "Лимонад “Дюшес”", 
  "Молочный коктейль “Клубника”", 
  "Компот из сухофруктов", 
  "Газировка “Кола”", 
  "Энергетик “RedBull”", 
  "Вишневый сок", 
  "Квас “Традиционный”", 
  "Томатный сок", 
  "Мятный чай", 
  "Фруктовый чай “Ягоды”", 
  "Смузи “Манго и банан”", 
  "Холодный чай “Персик”", 
  "Шоколадный молочный напиток", 
  "Кофе 3-в-1 “Капучино”", 
  "Фильтрованная вода"
];

const descriptionsDrinks = [
  "Газированная вода с насыщенным минералами составом.",
  "Натуральный сок без сахара, богат витамином С.",
  "Классический вкус для повседневного чаепития.",
  "Ароматный чай с нежным цветочным послевкусием.",
  "Настоящий выбор для любителей насыщенного вкуса.",
  "Освежающий напиток с грушевым вкусом.",
  "Нежный вкус и приятная текстура.",
  "Натуральный напиток без сахара.",
  "Популярный газированный напиток для любой компании.",
  "Для активных и энергичных людей.",
  "Натуральный сок с ярким вкусом вишни.",
  "Легкий и освежающий напиток с кислинкой.",
  "Полезный сок, богатый витаминами.",
  "Успокаивающий и освежающий напиток.",
  "Сладкий и насыщенный аромат ягод.",
  "Здоровый напиток для перекуса.",
  "Легкий освежающий напиток.",
  "Для сладкоежек.",
  "Быстрое решение для любителей кофе.",
  "Чистая и безопасная для питья вода."
];

const pricesDrinks = [
  350, 700, 1200, 900, 2200, 450, 800, 600, 500, 750, 
  700, 500, 600, 450, 850, 900, 650, 450, 1000, 350
];

const weightsDrinks = [
  "0.5 л", "1 л", "100 пакетиков", "100 г", "250 г", 
  "1.5 л", "0.5 л", "1 л", "1.5 л", "250 мл", 
  "1 л", "1.5 л", "1 л", "20 пакетиков", "100 г", 
  "300 мл", "1.5 л", "200 мл", "10 шт", "5 л"
];

const namesFruitsAndVeggies = [
  "Помидоры", 
  "Огурцы", 
  "Картофель", 
  "Морковь", 
  "Лук репчатый", 
  "Чеснок", 
  "Яблоки “Голден”", 
  "Бананы", 
  "Апельсины", 
  "Мандарины", 
  "Капуста белокочанная", 
  "Брокколи", 
  "Цветная капуста", 
  "Виноград", 
  "Перец болгарский", 
  "Киви", 
  "Груши", 
  "Лимоны", 
  "Зелень (укроп, петрушка)", 
  "Кабачки"
];

const descriptionsFruitsAndVeggies = [
  "Сочные и свежие для салатов и блюд.",
  "Хрустящие и ароматные для закусок.",
  "Универсальный продукт для гарниров.",
  "Сладкая и сочная, богата витаминами.",
  "Основной ингредиент для многих блюд.",
  "Ароматный и острый.",
  "Сладкие и хрустящие.",
  "Идеальный перекус и источник энергии.",
  "Богаты витамином С.",
  "Сладкие и сочные, идеально для зимнего сезона.",
  "Для салатов и супов.",
  "Полезный выбор для гарнира.",
  "Нежная на вкус.",
  "Сладкий и сочный для десертов.",
  "Яркий и ароматный.",
  "Экзотический вкус и множество витаминов.",
  "Сладкие и мягкие.",
  "Освежающий и кисловатый вкус.",
  "Свежая добавка к блюдам.",
  "Идеально для жарки и запекания."
];

const pricesFruitsAndVeggies = [
  800, 700, 350, 400, 300, 400, 600, 800, 900, 1000, 
  300, 1200, 1000, 1300, 1200, 1500, 900, 800, 150, 600
];

const weightsFruitsAndVeggies = [
  "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "200 г", "1 кг", "1 кг", 
  "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", "1 кг", 
  "1 кг", "1 кг", "100 г", "1 кг"
];

const namesDairy = [
  "Молоко пастеризованное", 
  "Сливочное масло", 
  "Сыр “Гауда”", 
  "Йогурт “Клубника”", 
  "Сметана", 
  "Творог", 
  "Кефир", 
  "Сыр “Моцарелла”", 
  "Ряженка", 
  "Сыр “Чеддер”"
];

const descriptionsDairy = [
  "Натуральное молоко для ежедневного употребления.",
  "Для выпечки и бутербродов.",
  "Полутвердый сыр с нежным вкусом.",
  "Нежный и сладкий.",
  "Универсальный продукт для соусов и супов.",
  "Богатый белком и кальцием.",
  "Для здоровья и легкости.",
  "Идеален для пиццы и салатов.",
  "Легкий напиток с приятным вкусом.",
  "Для сэндвичей и супов."
];

const pricesDairy = [
  350, 1200, 1500, 400, 350, 800, 400, 1700, 400, 1800
];

const weightsDairy = [
  "1 л", "200 г", "250 г", "200 г", "200 г", "500 г", "1 л", "250 г", "500 мл", "250 г"
];

const namesSnacks = [
  "Шоколад молочный “Alpen Gold”", 
  "Печенье “Орео”", 
  "Карамельные конфеты “Барбарис”", 
  "Чипсы “Lay’s”, сыр", 
  "Вафли “Артек”", 
  "Шоколад “Milka”, молочный с орехами", 
  "Сухарики со вкусом бекона", 
  "Конфеты “Рафаэлло”", 
  "Жевательные конфеты “Haribo”", 
  "Шоколадный батончик “Mars”", 
  "Попкорн “Карамельный”", 
  "Мармелад “Фрукты в сахаре”", 
  "Пастила “Яблочная”", 
  "Чипсы кукурузные “Doritos”", 
  "Пирожное “Твикс”", 
  "Шоколадный крем “Nutella”", 
  "Соленые орешки “Фисташки”", 
  "Крекеры “Tuc”", 
  "Кекс “Мраморный”", 
  "Чипсы овощные “BeHealthy”"
];

const descriptionsSnacks = [
  "Классический молочный шоколад с нежным вкусом.",
  "Хрустящие печенья с кремовой начинкой.",
  "Леденцы с легкой кислинкой.",
  "Хрустящие картофельные чипсы со вкусом сыра.",
  "Сладкие вафли с нежной начинкой.",
  "Кремовый шоколад с кусочками фундука.",
  "Хрустящий перекус с насыщенным вкусом.",
  "Кокосовые конфеты с нежной начинкой.",
  "Яркие мармеладные мишки для всей семьи.",
  "Классический шоколадный перекус.",
  "Идеальный выбор для просмотра фильма.",
  "Нежный мармелад с фруктовым вкусом.",
  "Легкая и натуральная сладость.",
  "Хрустящие снеки с пикантным вкусом.",
  "Сладкое лакомство с карамелью и шоколадом.",
  "Идеально подходит для тостов и выпечки.",
  "Питательный перекус с насыщенным вкусом.",
  "Легкие и хрустящие закуски.",
  "Домашний десерт с шоколадным рисунком.",
  "Здоровая альтернатива обычным чипсам."
];

const pricesSnacks = [
  550, 800, 600, 850, 500, 850, 300, 2200, 800, 350, 400, 750, 600, 900, 400, 2200, 1800, 600, 1000, 1200
];

const weightsSnacks = [
  "90 г", "154 г", "250 г", "150 г", "200 г", "100 г", "100 г", "150 г", "200 г", "50 г", "100 г", "300 г", "150 г", "150 г", "50 г", "350 г", "200 г", "150 г", "300 г", "100 г"
];

const products = [
  {
    category: "meat",
    items: [
        {name: "Говяжья вырезка", description: "Сочная и нежная говядина высшего качества для стейков или запекания.", price: 5400, weight: "1 кг", img: "/Img/Meat/говяжьявырезка.jpg"},
        {name: "Куриные грудки", description: "Диетическое мясо с низким содержанием жира, идеально для фитнес-блюд.", price: 2300, weight: "1 кг", img: "/Img/Meat/куриная грудка.jpg"},
        {name: "Свиные ребра", description: "Подойдут для запекания или приготовления барбекю.", price: 4800, weight: "1 кг", img: "/Img/Meat/свиныерёбра.webp"},
        {name: "Фарш говяжий", description: "Подходит для котлет, пельменей или тефтелей.", price: 4100, weight: "1 кг", img: "/Img/Meat/фарш говядина.jpg"},
        {name: "Баранина на кости", description: "Насыщенный вкус для приготовления бульонов и плова.", price: 6500, weight: "1 кг", img: "/Img/Meat/bee na kosti.jpg"},
        {name: "Говяжий стейк Рибай", description: "Высококачественное мясо для гриля.", price: 8500, weight: "1 кг", img: "/Img/Meat/ribay gov.jpg"},
        {name: "Куриные ножки", description: "Универсальный продукт для жарки, запекания или тушения.", price: 2100, weight: "1 кг", img: "/Img/Meat/chic leg.jpg"},
        {name: "Свиное филе", description: "Нежное мясо для запекания и жарки.", price: 5200, weight: "1 кг", img: "/Img/Meat/pig fil.webp"},
        {name: "Говяжий язык", description: "Подходит для варки и добавления в салаты.", price: 6000, weight: "1 кг", img: "/Img/Meat/gov iaz.jpg"},
        {name: "Куриные крылья", description: "Идеально для маринада и гриля.", price: 1900, weight: "1 кг", img: "/Img/Meat/chic wing.webp"},
        {name: "Утка", description: "Отличный выбор для праздничного стола.", price: 7900, weight: "1.5 кг", img: "/Img/Meat/gus.webp"},
        {name: "Индюшиное филе", description: "Нежное мясо с низким содержанием жира.", price: 4500, weight: "1 кг", img: "/Img/Meat/induk fil.jpg"},
        {name: "Куриный фарш", description: "Для котлет, запеканок и соусов.", price: 2200, weight: "1 кг", img: "/Img/Meat/chic far.webp"},
        {name: "Свиные стейки", description: "Для жарки или запекания.", price: 5400, weight: "1 кг", img: "/Img/Meat/svin stek.png"},
        {name: "Говяжий гуляш", description: "Уже порезанное мясо для тушения.", price: 4700, weight: "1 кг", img: "/Img/Meat/gov gul.jpg"},
        {name: "Курица целая", description: "Универсальный продукт для запекания или бульона.", price: 4000, weight: "2 кг", img: "/Img/Meat/chic.jpg"},
        {name: "Печень говяжья", description: "Богата витаминами, подходит для паштетов или жарки.", price: 2700, weight: "1 кг", img: "/Img/Meat/gov pec.jpg"},
        {name: "Говяжий хвост", description: "Идеально для супов.", price: 3000, weight: "1 кг", img: "/Img/Meat/gov tal.webp"},
        {name: "Свиные отбивные", description: "Для жарки или гриля.", price: 5100, weight: "1 кг", img: "/Img/Meat/svin bolno.webp"},
        {name: "Бекон нарезной", description: "Для завтраков или закусок.", price: 3000, weight: "500 г", img: "/Img/Meat/bek.jpg"}      
    ]
  },
  {
    category: "bread",
    items: [
      [
        {name: "Пшеничный хлеб", description: "Хрустящий и мягкий внутри.", price: 300, weight: "400 г", img: "/Img/Bread/psh bred.jpg"},
        {name: "Ржаной хлеб", description: "Богат клетчаткой и витаминами.", price: 350, weight: "400 г", img: "/Img/Bread/rzh bred.webp"},
        {name: "Багет французский", description: "Легкий и воздушный с золотистой корочкой.", price: 500, weight: "300 г", img: "/Img/Bread/baget.jpg"},
        {name: "Булочки для бургеров", description: "Мягкие и идеально подходят для домашних бургеров.", price: 700, weight: "6 шт", img: "/Img/Bread/bulka bur.jpg"},
        {name: "Лаваш армянский", description: "Тонкий и нежный для закусок или шашлыка.", price: 450, weight: "500 г", img: "/Img/Bread/lavash.webp"},
        {name: "Хлеб цельнозерновой", description: "Полезный выбор для завтраков.", price: 400, weight: "400 г", img: "/Img/Bread/hleb cel.jpg"},
        {name: "Пицца", description: "С добавлением томатного соуса, шампиньонов,помидоров,сыра и украшено прекрасным базиликом.Mama mia!", price: 1800, weight: "400 г", img: "/Img/Bread/pizza.webp"},
        {name: "Круассаны с шоколадом", description: "С нежной начинкой внутри.", price: 600, weight: "3 шт", img: "/Img/Bread/crua choc.webp"},
        {name: "Печенье овсяное", description: "Легкий перекус к чаю.", price: 500, weight: "300 г", img: "/Img/Bread/ovs pec.webp"},
        {name: "Маффины с черникой", description: "Нежные и сладкие.", price: 600, weight: "2 шт", img: "/Img/Bread/maf cher.jpg"}
      ]      
    ]
  },
  {
    category: "drinks",
    items: [
      [
        {name: "Минеральная вода “Боржоми”", description: "Газированная вода с насыщенным минералами составом.", price: 350, weight: "0.5 л", img: "/Img/Drinks/borjik.jpg"},
        {name: "Апельсиновый сок", description: "Натуральный сок без сахара, богат витамином С.", price: 700, weight: "1 л", img: "/Img/Drinks/pipko.jpg"},
        {name: "Черный чай", description: "Классический вкус для повседневного чаепития.", price: 1200, weight: "100 пакетиков", img: "/Img/Drinks/chai chern.jpeg"},
        {name: "Зеленый чай с жасмином", description: "Ароматный чай с нежным цветочным послевкусием.", price: 900, weight: "100 г", img: "/Img/Drinks/jasmina pina.jpg"},
        {name: "Кофе молотый “Arabica”", description: "Настоящий выбор для любителей насыщенного вкуса.", price: 2200, weight: "250 г", img: "/Img/Drinks/arabichka.webp"},
        {name: "Лимонад “Дюшес”", description: "Освежающий напиток с грушевым вкусом.", price: 450, weight: "1.5 л", img: "/Img/Drinks/djusik.png"},
        {name: "Молочный коктейль “Клубника”", description: "Нежный вкус и приятная текстура.", price: 800, weight: "0.5 л", img: "/Img/Drinks/klubca.jpeg"},
        {name: "Компот из сухофруктов", description: "Натуральный напиток без сахара.", price: 600, weight: "1 л", img: "/Img/Drinks/kompotai.jpeg"},
        {name: "Газировка “Кола”", description: "Популярный газированный напиток для любой компании.", price: 750, weight: "1.5 л", img: "/Img/Drinks/kokchik.jpg"},
        {name: "Энергетик “RedBull”", description: "Для активных и энергичных людей.", price: 700, weight: "250 мл", img: "/Img/Drinks/red muu.webp"},
        {name: "Вишневый сок", description: "Натуральный сок с ярким вкусом вишни.", price: 500, weight: "1 л", img: "/Img/Drinks/vishenka.jpeg"},
        {name: "Квас “Традиционный”", description: "Легкий и освежающий напиток с кислинкой.", price: 600, weight: "1.5 л", img: "/Img/Drinks/kvak.png"},
        {name: "Томатный сок", description: "Полезный сок, богатый витаминами.", price: 450, weight: "1 л", img: "/Img/Drinks/tomatishe.jpg"},
        {name: "Мятный чай", description: "Успокаивающий и освежающий напиток.", price: 850, weight: "20 пакетиков", img: "/Img/Drinks/miatka.jpeg"},
        {name: "Фруктовый чай “Ягоды”", description: "Сладкий и насыщенный аромат ягод.", price: 900, weight: "100 г", img: "/Img/Drinks/iagodka.jpg"},
        {name: "Смузи “Манго и банан”", description: "Здоровый напиток для перекуса.", price: 650, weight: "300 мл", img: "/Img/Drinks/smuzamba.jpg"},
        {name: "Холодный чай “Персик”", description: "Легкий освежающий напиток.", price: 450, weight: "1.5 л", img: "/Img/Drinks/fusetea.png"},
        {name: "Шоколадный молочный напиток", description: "Для сладкоежек.", price: 1000, weight: "200 мл", img: "/Img/Drinks/choco drinkus.jpg"},
        {name: "Кофе 3-в-1 “Капучино”", description: "Быстрое решение для любителей кофе.", price: 350, weight: "10 шт", img: "/Img/Drinks/kapuchinia.jpeg"},
        {name: "Фильтрованная вода", description: "Чистая и безопасная для питья вода.", price: 500, weight: "5 л", img: "/Img/Drinks/vodka.jpg"}
      ]      
    ]
  },
  {
    category: "FruitsAndVeggies",
    items:[
      [
      {name: "Помидоры", description: "Сочные и свежие для салатов и блюд.", price: 800, weight: "1 кг", img: "/Img/FruitsAndVeggies/Помидоры.webp"},
      {name: "Огурцы", description: "Хрустящие и ароматные для закусок.", price: 700, weight: "1 кг", img: "/Img/FruitsAndVeggies/Огурцы.webp"},
      {name: "Картофель", description: "Универсальный продукт для гарниров.", price: 350, weight: "1 кг", img: "/Img/FruitsAndVeggies/Картофель.webp"},
      {name: "Морковь", description: "Сладкая и сочная, богата витаминами.", price: 400, weight: "1 кг", img: "/Img/FruitsAndVeggies/Морковь.jpg"},
      {name: "Лук репчатый", description: "Основной ингредиент для многих блюд.", price: 300, weight: "1 кг", img: "/Img/FruitsAndVeggies/Лук репчатый.webp"},
      {name: "Чеснок", description: "Ароматный и острый.", price: 400, weight: "200 г", img: "/Img/FruitsAndVeggies/Чеснок.jpg"},
      {name: "Яблоки “Голден”", description: "Сладкие и хрустящие.", price: 600, weight: "1 кг", img: "/Img/FruitsAndVeggies/Яблоки “Голден”.jpg"},
      {name: "Бананы", description: "Идеальный перекус и источник энергии.", price: 800, weight: "1 кг", img: "/Img/FruitsAndVeggies/Бананы.webp"},
      {name: "Апельсины", description: "Богаты витамином С.", price: 900, weight: "1 кг", img: "/Img/FruitsAndVeggies/Апельсины.webp"},
      {name: "Мандарины", description: "Сладкие и сочные, идеально для зимнего сезона.", price: 1000, weight: "1 кг", img: "/Img/FruitsAndVeggies/Мандарины.webp"},
      {name: "Капуста белокочанная", description: "Для салатов и супов.", price: 300, weight: "1 кг", img: "/Img/FruitsAndVeggies/Капуста белокочанная.jpg"},
      {name: "Брокколи", description: "Полезный выбор для гарнира.", price: 1200, weight: "1 кг", img: "/Img/FruitsAndVeggies/Брокколи.jpg"},
      {name: "Цветная капуста", description: "Нежная на вкус.", price: 1000, weight: "1 кг", img: "/Img/FruitsAndVeggies/Цветная капуста.webp"},
      {name: "Виноград", description: "Сладкий и сочный для десертов.", price: 1300, weight: "1 кг", img: "/Img/FruitsAndVeggies/Виноград.jpg"},
      {name: "Перец болгарский", description: "Яркий и ароматный.", price: 1200, weight: "1 кг", img: "/Img/FruitsAndVeggies/Перец болгарский.jpg"},
      {name: "Киви", description: "Экзотический вкус и множество витаминов.", price: 1500, weight: "1 кг", img: "/Img/FruitsAndVeggies/Киви.webp"},
      {name: "Груши", description: "Сладкие и мягкие.", price: 900, weight: "1 кг", img: "/Img/FruitsAndVeggies/Груши.webp"},
      {name: "Лимоны", description: "Освежающий и кисловатый вкус.", price: 800, weight: "1 кг", img: "/Img/FruitsAndVeggies/Лимоны.jpg"},
      {name: "Зелень (укроп, петрушка)", description: "Свежая добавка к блюдам.", price: 150, weight: "100 г", img: "/Img/FruitsAndVeggies/Зелень (укроп, петрушка).webp"},
       {name: "Кабачки", description: "Идеально для жарки и запекания.", price: 600, weight: "1 кг", img: "/Img/FruitsAndVeggies/Кабачки.webp"}
    ]
]
},{
  category: "Dairy",
  items:[
    [
        {name: "Молоко пастеризованное", description: "Натуральное молоко для ежедневного употребления.", price: 350, weight: "1 л", img: "/Img/Dairy/Молоко пастеризованное.jpeg"},
        {name: "Сливочное масло", description: "Для выпечки и бутербродов.", price: 1200, weight: "200 г", img: "/Img/Dairy/Сливочное масло.jpg"},
        {name: "Сыр “Гауда”", description: "Полутвердый сыр с нежным вкусом.", price: 1500, weight: "250 г", img: "/Img/Dairy/Сыр “Гауда”.jpg"},
        {name: "Йогурт “Клубника”", description: "Нежный и сладкий.", price: 400, weight: "200 г", img: "/Img/Dairy/Йогурт “Клубника”.webp"},
        {name: "Сметана", description: "Универсальный продукт для соусов и супов.", price: 350, weight: "200 г", img: "/Img/Dairy/Сметана.jpeg"},
        {name: "Творог", description: "Богатый белком и кальцием.", price: 800, weight: "500 г", img: "/Img/Dairy/Творог.jpg"},
        {name: "Кефир", description: "Для здоровья и легкости.", price: 400, weight: "1 л", img: "/Img/Dairy/Кефир.jpg"},
        {name: "Сыр “Моцарелла”", description: "Идеален для пиццы и салатов.", price: 1700, weight: "250 г", img: "/Img/Dairy/Сыр “Моцарелла”.webp"},
        {name: "Ряженка", description: "Легкий напиток с приятным вкусом.", price: 400, weight: "500 мл", img: "/Img/Dairy/Ряженка.jpg"},
        {name: "Сыр “Чеддер”", description: "Для сэндвичей и супов.", price: 1800, weight: "250 г", img: "/Img/Dairy/Сыр “Чеддер”.jpg"}
      ]
]
},
{
  category: "Snacks",
  items:[
    [
      {name: "Шоколад молочный “Alpen Gold”", description: "Классический молочный шоколад с нежным вкусом.", price: 550, weight: "90 г", img: "/Img/Snacks/Шоколад молочный “Alpen Gold”.jpg"},
      {name: "Печенье “Орео”", description: "Хрустящие печенья с кремовой начинкой.", price: 800, weight: "154 г", img: "/Img/Snacks/Печенье “Орео”.jpg"},
      {name: "Карамельные конфеты “Барбарис”", description: "Леденцы с легкой кислинкой.", price: 600, weight: "250 г", img: "/Img/Snacks/Карамельные конфеты “Барбарис”.jpg"},
      {name: "Чипсы “Lay’s”, сыр", description: "Хрустящие картофельные чипсы со вкусом сыра.", price: 850, weight: "150 г", img: "/Img/Snacks/Чипсы “Lay’s”, сыр.webp"},
      {name: "Вафли “Артек”", description: "Сладкие вафли с нежной начинкой.", price: 500, weight: "200 г", img: "/Img/Snacks/Вафли “Артек”.png"},
      {name: "Шоколад “Milka”, молочный с орехами", description: "Кремовый шоколад с кусочками фундука.", price: 850, weight: "100 г", img: "/Img/Snacks/Шоколад “Milka”, молочный с орехами.jpg"},
      {name: "Сухарики со вкусом бекона", description: "Хрустящий перекус с насыщенным вкусом.", price: 300, weight: "100 г", img: "/Img/Snacks/Сухарики со вкусом бекона.webp"},
      {name: "Конфеты “Рафаэлло”", description: "Кокосовые конфеты с нежной начинкой.", price: 2200, weight: "150 г", img: "/Img/Snacks/Конфеты “Рафаэлло”.webp"},
      {name: "Жевательные конфеты “Haribo”", description: "Яркие мармеладные мишки для всей семьи.", price: 800, weight: "200 г", img: "/Img/Snacks/Жевательные конфеты “Haribo”.webp"},
      {name: "Шоколадный батончик “Mars”", description: "Классический шоколадный перекус.", price: 350, weight: "50 г", img: "/Img/Snacks/Шоколадный батончик “Mars”.jpg"},
      {name: "Попкорн “Карамельный”", description: "Идеальный выбор для просмотра фильма.", price: 400, weight: "100 г", img: "/Img/Snacks/Попкорн “Карамельный”.webp"},
      {name: "Мармелад “Фрукты в сахаре”", description: "Нежный мармелад с фруктовым вкусом.", price: 750, weight: "300 г", img: "/Img/Snacks/Мармелад “Фрукты в сахаре”.webp"},
      {name: "Пастила “Яблочная”", description: "Легкая и натуральная сладость.", price: 600, weight: "150 г", img: "/Img/Snacks/Пастила “Яблочная”.webp"},
      {name: "Чипсы кукурузные “Doritos”", description: "Хрустящие снеки с пикантным вкусом.", price: 900, weight: "150 г", img: "/Img/Snacks/Чипсы кукурузные “Doritos”.webp"},
      {name: "Пирожное “Твикс”", description: "Сладкое лакомство с карамелью и шоколадом.", price: 400, weight: "50 г", img: "/Img/Snacks/Пирожное “Твикс”.webp"},
      {name: "Шоколадный крем “Nutella”", description: "Идеально подходит для тостов и выпечки.", price: 2200, weight: "350 г", img: "/Img/Snacks/Шоколадный крем “Nutella”.webp"},
      {name: "Соленые орешки “Фисташки”", description: "Питательный перекус с насыщенным вкусом.", price: 600, weight: "200 г", img: "/Img/Snacks/Соленые орешки “Фисташки”.jpg"},
      {name: "Крекеры “Tuc”", description: "Легкие и хрустящие закуски.", price: 1000, weight: "150 г", img: "/Img/Snacks/Крекеры “Tuc”.jpg"},
      {name: "Кекс “Мраморный”", description: "Домашний десерт с шоколадным рисунком.", price: 1200, weight: "300 г", img: "/Img/Snacks/Кекс “Мраморный”.webp"},
      {name: "Чипсы овощные “BeHealthy”", description: "Здоровая альтернатива обычным чипсам.", price: 600, weight: "100 г", img: "/Img/Snacks/Чипсы овощные “BeHealthy”.webp"}
    ]    
  ]
}

];


function App() {
  let test1 = 'mogus'
  let price1 = 6400
  let weight1 = '12g'
  let description1 = 'tasty'

  const AssemblyMeat = () => {
    const meatItems = products.find((product) => product.category === "meat").items;
    return (
      <div>
        {meatItems.map((item, index) => (
          <MenuItem
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
          />
        ))}
      </div>
    );
  };
  

const AssemblyBread = () => {
  const breadCategory = products.find((product) => product.category === "bread");
  const breadItems = breadCategory.items.flat();
  return (
    <div>
      {breadItems.map((item, index) => (
        <MenuItem
          img={item.img}
          name={item.name}
          description={item.description}
          price={item.price}
          weight={item.weight}
        />
      ))}
    </div>
  );
};

  const AssemblyDrinks = () => {
    const drinksCategory = products.find((product) => product.category === "drinks");
    const drinksItems = drinksCategory.items.flat();
    return (
      <div>
        {drinksItems.map((item, index) => (
          <MenuItem
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
            weight={item.weight}
          />
        ))}
      </div>
    );
  };
  
    const AssemblyFruitsnvegies = () => {
      const fruitsCategory = products.find((product) => product.category === "FruitsAndVeggies");
      const fruitsItems = fruitsCategory.items.flat();
  return (
    <div>
      {fruitsItems.map((item, index) => (
        <MenuItem
          img={item.img}
          name={item.name}
          description={item.description}
          price={item.price}
          weight={item.weight}
        />
      ))}
    </div>
  );
  };

  const AssemblyMilk = () => {
    const DairyCategory = products.find((product) => product.category === "Dairy");
    const DairyItems = DairyCategory.items.flat();
return (
  <div>
    {DairyItems.map((item, index) => (
      <MenuItem
        img={item.img}
        name={item.name}
        description={item.description}
        price={item.price}
        weight={item.weight}
      />
    ))}
  </div>
);
};

  const AssemblySnacks = () => {
    const SnacksCategory = products.find((product) => product.category === "Snacks");
    const SnacksItems = SnacksCategory.items.flat();
return (
  <div>
    {SnacksItems.map((item, index) => (
      <MenuItem
        img={item.img}
        name={item.name}
        description={item.description}
        price={item.price}
        weight={item.weight}
      />
    ))}
  </div>
);
};



  return (
    <div className="App">

      
      <BrowserRouter>
      <Header/>
         <Routes>


          <Route path="/meat" element={<AssemblyMeat/>}/>
          <Route path="/bread" element={<AssemblyBread/>}/>
          <Route path="/drinks" element={<AssemblyDrinks/>}/>
          <Route path="/fruitsnvegies" element={<AssemblyFruitsnvegies/>}/>
          <Route path="/milk" element={<AssemblyMilk/>}/>
          <Route path="/snacks" element={<AssemblySnacks/>}/>


          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
