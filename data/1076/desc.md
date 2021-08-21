**<center>NGUỒN: PreVNOI Ⅸ (BẮC GIANG 2019)</center>**
<br>

Trong tòa biệt thự của giáo sư ~X~ có nhiều phòng nằm dọc theo một đường thẳng. Các phòng được đánh số lần lượt ~1, 2, 3, ....~ Giáo sư muốn sơn lại tòa biệt thự của mình. Giáo sư mua một thùng sơn có ~26~ màu, các màu được đánh số bằng chữ cái tiếng Anh in thường từ ~a~ đến ~z~. Sau đó, bắt đầu từ phòng số ~1~, mỗi ngày trong ~n~ ngày tiếp theo, giáo sư thực hiện một trong hai loại công việc sau:

- ~1\ x~: Di chuyển đến phòng số hiệu nhỏ nhất chưa được sơn lại và sơn màu phòng đó thành màu ~x~ (ở đây ~x~ là một chữ cái tiếng Anh in thường).
- ~2\ x\ y~: Sơn tất cả các phòng đã sơn lại đang có màu sơn ~x~ thành màu sơn ~y~ (Ở đây ~x~ và ~y~ là các chữ cái tiếng Anh in thường, ~x~ và ~y~ có thể giống nhau)

**Yêu cầu**: Biết trình tự các công việc mà giáo sư ~X~ thực hiện, hỏi rằng sau ~n~ ngày, màu của các phòng được sơn sẽ như thế nào?

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~
- ~n~ dòng tiếp theo, mỗi dòng chứa một công việc thuộc một trong hai loại như mô tả trên

## Dữ liệu ra:
- Ghi ra một dòng duy nhất mô tả màu của các phòng được sơn theo thứ tự lần lượt phòng ~1, 2, ...., K~ với ~K~ là số hiệu lớn nhất của phòng được sơn lại.

## Ví dụ:
#### Dữ liệu vào:
```
10
1 c
1 b
1 a
1 c
1 d
2 a b
1 c
1 a
1 b
2 b d
```

#### Dữ liệu ra:
```
cddcdcad
```

#### Giải thích:
- Trước tiên giáo sư sơn ~5~ phòng đầu với các màu sơn ~c, b, a, c, d~
- Sau đó các  phòng màu ~a~ sơn lại thành ~b~, màu của các phòng là ~c, b, b, c, d~
- Tiếp theo ~3~ phòng tiếp được sơn và các màu là ~c, b, b, c, d, c, a, b~
- Cuối cùng các phòng màu ~b~ được  sơn màu ~d~, dãy màu các phòng là ~c, d, d, c, d, c, a, d~

## Giới hạn:
- **Subtask** ~\#1~: (~50\%~ số điểm) ~n≤10^4~	
- **Subtask** ~\#2~: (~50\%~ số điểm) ~n≤10^6~
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)