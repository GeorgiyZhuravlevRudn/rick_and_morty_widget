/**
 * Object Fields that app uses
 * 1. in classes
 * 2. in input fields -> FORM_FIELDS
 * 3. in requests
 */

/**FOR ALL */
export const ID = 'id';
export const TITLE = 'title';
export const SUBTITLE = 'subtitle';
export const DESCRIPTION = 'description';
export const IMG = 'img';
export const START_DATE = 'startDate'; // дата начала
export const EXPIRY_DATE = 'expiryDate';//дата окончания
export const DURATION = 'duration';
export const PAY_METHOD='payMethod';
export const STATUS ='status';
export const POS = 'pos';//позиция
export const SHOW = 'show';//bool -> показывать || !показывать
/**ACT */
export const ATTENTION_BLOCK = 'attentionBlock';
export const POSTER = 'poster';
export const LOCATION = 'location';
export const IS_FREE = 'isFree';
export const AGE_RESTRICTION = 'ageRestriction';

/**PROMO */
export const DISCOUNT = 'discount';
export const TICKET_AMOUNT = 'ticketAmount'; // count of available tickets
/**ORGANIZOR */

export const USER_INFO = 'userInfo';
export const COST = 'cost';
export const ADDRESS = 'address';
export const STATUS_ID = 'statusId';
export const COMMENTS ='comments';
export const COMMENT ='comment';
export const USE_BONUS ='useBonus';
export const DOCUMENT = 'document';

/**USER: USER, ORGANIZOR, ADMIN */
export const FIRSTNAME ='firstname';
export const LASTNAME = 'lastname';
export const MIDDLENAME = 'middlename';
export const EMAIL = 'email';
export const PHONE = 'phone';
export const USER_LOGIN = 'login';
export const USER_PASSWORD = 'password';
export const ROLE = 'role';
export const INN='inn';
export const BIK='bik';
export const KPP='kpp';
export const RS='rs';
export const KS='ks';
export const ACCOUNT_ID = 'accountId'; // номер счета
export const COMISSION_FEE = 'comissionFee';
export const LEGAL = 'legal';//bool -> юр.лицо || !юр.лицо

/**NAMING THAT USER SEE(названия, которые видны пользователю) */

// export const orderNames = {
// 	[ID]:'Номер заказа',
// 	[STATUS]:'Статус',
// 	[USER_INFO]:null,
// 	[COST]:'Заказ на сумму',
// 	[ADVANCE_PAYMENT]:'Внесенный Аванс',
// 	[REST_PAYMENT]:'Осталось оплатить',
// 	[PROJECT_LINK]:'Cсылка на проект',
// 	[DEMO_LINK]:'Демо ссылка на проект',
// 	[PROJECT_DIGITALIZATION_LINK]:'Ссылка на проект оцифровки',
// 	[HOUSE]:'',
// 	[CITY]:'город',
// 	[FLAT]:'',
// 	[STREET]:'улица',
// 	[DESIRED_DATE]:'Желаемая дата',
// 	[DESIRED_TIME]:'Желаемое время',
// 	[SENDING_DATE]: 'Дата выезда',
// 	[REPRESENTATIVE_NAME]: 'Представитель',
// 	[REPRESENTATIVE_PHONE]:'Тел. представителя',
// 	[PACKAGE_DEAL]:'Пакет',
// 	[SQUARE]:'Площадь',
// 	[FLOORS]: 'Этажность',
// 	[SOFTWARE]:'ПО',
// 	[COMMENTS]:'Комментарии',
// 	[PAY_METHOD]:'Способ оплаты',
// 	[DEMONSTRATION_LINK]: 'Проект',
// 	[ADDRESS]:'Адрес',
// 	[BONUS_POINTS]:'Текущие баллы'
// }
export const userNames = {
	[FIRSTNAME]:'Имя',
	[LASTNAME]:'Фамилия',
	[EMAIL]:'Email',
	[PHONE]:'Телефон',
	[INN]:'ИНН',
	[BIK]:'БИК',
	[KPP]:'КПП',
	[RS]:'Р/С',
	//[BRAND]:'Брэнд',
	// [TOTAL_PAID]:'Сумма всех сделок',
	// [BONUS_POINTS]:'Баллы',
	// [WHATSAPP]:'whatsapp',
	// [TG]: 'tg',
	// [LEGAL_PERSON]:'Юр.лицо',
	// [BONUS_POINTS]:'Текущие баллы'
}