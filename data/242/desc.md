Cho ~4~ số nguyên dương ~a,b,c,d\ (1≤a,b,c,d≤100)~ là độ dài ~4~ đoạn thẳng.

**Yêu cầu:** Bạn hãy cho biết có thể chọn ra được ~3~ đoạn thẳng trong ~4~ đoạn thẳng trên để tạo thành ~1~ tam giác, nếu không thì có thể tạo thành một **tam giác suy biến** (có một góc ~180^0~), hoặc không thể tạo thành một trong hai trường hợp trên.

## Dữ liệu vào:
- Dòng đầu chứa một số nguyên dương ~t\ (1≤t≤20)~ là số lượng test;
- ~t~ dòng tiếp theo, dòng thứ ~i~ chứa bốn số nguyên dương ~a,b,c,d\ (1≤a,b,c,d≤100)~ là bộ dữ liệu của test ~i~.

## Dữ liệu ra:
- Ghi ra trên ~t~ dòng, dòng thứ ~i~ ghi đáp án câu hỏi ~i~: ghi `TRIANGLE` nếu tạo được tam giác, `SEGMENT` nếu tạo thành tam giác suy biến, `IMPOSSIBLE` nếu không tạo được một trong hai trường hợp trên.

## Ví dụ:
#### Dữ liệu vào:
```
3
4 2 1 3
7 2 2 4
3 5 9 1
```

#### Dữ liệu ra:
```
TRIANGLE
SEGMENT
IMPOSSIBLE
```

#### Giải thích:
- Test ~1~: Tam giác tạo được có độ dài ~3~ cạnh là ~4, 2, 3~;
- Test ~2~: Tam giác suy biến từ ~3~ cạnh có độ dài ~2, 2, 4~;
- Test ~3~: Không tạo được tam giác.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)