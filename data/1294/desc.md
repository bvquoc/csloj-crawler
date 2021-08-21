<!--**<center>CSP Open Contest 1</center>**-->

Dubu đang bận ôn thi bộ môn "Toán rời rạc" thì có ~N~ em bé muốn đến chơi, do vậy Dubu sẽ phải đi mua kẹo để chia cho các bé. Vì để tiện ôn bài luôn nên Dubu sẽ mua một số lượng kẹo có dạng ~M!~ để chia cho các bé. Khổ nỗi vì có thể có vài em bé bận đột xuất Dubu không rõ sẽ có chính xác bao nhiêu em bé sẽ đến và vì tiền tiết kiệm của Dubu đang cạn nên Dubu sẽ mua một lượng vừa đủ kẹo sao cho có thể chia đều cho tất cả các em. Do đó, Dubu phải lên phương án cho tất cả các trường hợp, cụ
thể hơn với mỗi số ~i\ (2 ≤ i ≤ N)~ Dubu sẽ phải tính xem lượng kẹo ít nhất mình có thể mua mà có dạng ~M!~ và chia hết cho ~i~. Dubu băn khoăn xem nếu tính tổng tất cả các số ~M~ trong tất cả trường hợp sẽ có giá trị là bao nhiêu. Các bạn hãy giúp Dubu nhé!

## Dữ liệu vào:
- Gồm duy nhất một số nguyên dương ~N~ là số lượng tối đa các em bé có thể đến.

## Dữ liệu ra:
- Gồm một số nguyên là tổng các số ~M~ trong tất cả các trường hợp.

## Ví dụ
#### Dữ liệu vào:
```
7
```

#### Dữ liệu ra:
```
24
```

#### Dữ liệu vào:
```
9
```

#### Dữ liệu ra:
```
34
```

## Giải thích:
- Nếu ~i = 2~ thì cần mua ~2!~ viên kẹo;
- Nếu ~i = 3~ thì cần mua ~3!~ viên kẹo;
- Nếu ~i = 4~ thì cần mua ~4!~ viên kẹo;
- Nếu ~i = 5~ thì cần mua ~5!~ viên kẹo;
- Nếu ~i = 6~ thì cần mua ~3!~ viên kẹo;
- Nếu ~i = 7~ thì cần mua ~7!~ viên kẹo;
- Nếu ~i = 8~ thì cần mua ~4!~ viên kẹo;
- Nếu ~i = 9~ thì cần mua ~6!~ viên kẹo;

Vì vậy với ~N = 9~ đáp số sẽ là ~2 + 3 + 4 + 5 + 3 + 7 + 4 + 6 = 34~

## Giới hạn:
- Subtask ~\#1: 50\%~ số điểm có ~N ≤ 20~;
- Subtask ~\#2: 50\%~ số điểm còn lại có ~N ≤ 10^7~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)