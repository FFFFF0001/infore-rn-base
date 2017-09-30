/**
 * Created by coderxuan on 2017/8/15.
 */

/***********************************************************************
 *                           日期时间工具类                            *
 *                     注：调用方式，dateUtil.方法名                   *
 * ********************************************************************/
let DateUtil = {
    /*
     * 方法作用：【取传入日期是星期几】
     * 使用方法：dateUtil.nowFewWeeks(new Date());
     * @param date{date} 传入日期类型
     * @returns {星期四，...}
     */
    nowFewWeeks: function (date) {
        if (date instanceof Date) {
            let dayNames = new Array("星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
            return dayNames[date.getDay()];
        } else {
            return "Param error,date type!";
        }
    },
    /*
     * 方法作用：【字符串转换成日期】
     * 使用方法：dateUtil.strTurnDate("2010-01-01");
     * @param str {String}字符串格式的日期，传入格式：yyyy-mm-dd(2015-01-31)
     * @return {Date}由字符串转换成的日期
     */
    strTurnDate: function (str) {
        let re = /^(\d{4})\S(\d{1,2})\S(\d{1,2})$/;
        let dt;
        if (re.test(str)) {
            dt = new Date(RegExp.$1, RegExp.$2 - 1, RegExp.$3);
        }
        return dt;
    },
    /*
     * 方法作用：【计算2个日期之间的天数】
     * 传入格式：yyyy-mm-dd(2015-01-31)
     * 使用方法：dateUtil.dayMinus(startDate,endDate);
     * @startDate 开始时间字符串
     * @endDate 结束时间字符串
     * @return endDate - startDate的天数差
     */
    dayMinus: function (startDate, endDate) {
        if (this.strTurnDate(startDate) instanceof Date && this.strTurnDate(endDate) instanceof Date) {
            let start = Date.parse(this.strTurnDate(startDate))
            let end = Date.parse(this.strTurnDate(endDate))
            console.log(end)
            console.log(start)
            let days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
            return days;
        } else {
            return "Param error,date type!";
        }
    },

    /**
     * 时间戳转具体时间
     * @param date 时间戳
     */
    time2Specific: function (stringDate) {
        if (stringDate === null || stringDate === undefined || stringDate === 'null' || stringDate === '') {
            stringDate = new Date().dateFormat("yyyy-MM-dd hh:mm:ss");
        } else {
            stringDate = new Date(stringDate).dateFormat("yyyy-MM-dd hh:mm:ss");
        }
        let obtain1 = stringDate.split(' ');
        let obtain2 = obtain1[0].split('-');//天数
        let obtain = obtain1[1].split(':');//小时
        stringDate = stringDate.replace(new RegExp("-", "gm"), "/");
        // log(stringDate);
        let millisecond = new Date(stringDate).getTime();
        let diff = new Date().getTime() - millisecond;
        if (diff < 0)
            return;
        let today = new Date().getDate();

        if (diff <= 24 * 60 * 60 * 1000) {
            if (parseInt(obtain2[2]) < today) {
                return `昨天 ${obtain[0]}:${obtain[1]}`;
            }
            return `今天 ${obtain[0]}:${obtain[1]}`;
        } else {
            if (diff <= 48 * 60 * 60 * 1000) {
                if (parseInt(obtain2[2]) === (today - 1)) {
                    return `昨天 ${obtain[0]}:${obtain[1]}`;
                } else {
                    return `前天 ${obtain[0]}:${obtain[1]}`;
                }
            } else if (48 * 60 * 60 * 1000 < diff && diff < 7 * 24 * 60 * 60 * 1000) {
                let temp = new Date(stringDate).getDay();
                let whichDay;
                switch (temp) {
                    case 0:
                        whichDay = '星期日';
                        break;
                    case 1:
                        whichDay = '星期一';
                        break;
                    case 2:
                        whichDay = '星期二';
                        break;
                    case 3:
                        whichDay = '星期三';
                        break;
                    case 4:
                        whichDay = '星期四';
                        break;
                    case 5:
                        whichDay = '星期五';
                        break;
                    case 6:
                        whichDay = '星期六';
                        break;
                }
                return `${whichDay} ${obtain[0]}:${obtain[1]}`;
            } else {
                return `${obtain1[0]} ${obtain[0]}:${obtain[1]}`;
            }
        }

    }
};

module.exports = DateUtil;
