Trên mặt phẳng tọa độ cho điểm ~M(u;v)~ và điểm ~N(x,y)~. Tại một bước, có thể di chuyển từ điểm ~(a,b)~ bất kỳ đến một trong các điểm ~(a+b;b),(a;a+b),(a-b;b)~ hoặc ~(a;b-a)~.

**Yêu cầu:** Bạn hãy trả lời ~t~ câu hỏi dạng cho biết có thể di chuyển từ điểm ~M~ đến điểm ~N~ sau một số bước di chuyển không?

## Dữ liệu vào: 
- Dòng đầu chứa số nguyên dương ~t\ (1≤t≤1000)~ là số lượng câu hỏi;
- ~t~ dòng tiếp theo, dòng thứ ~i~ là câu hỏi ~i~ có ~4~ số nguyên dương ~u,v,x,y\ (1≤u,v,x,y≤10^{18})~.

## Dữ liệu ra:
- Ghi ra trên ~t~ dòng, dòng thứ ~i~ là đáp án câu hỏi ~i~, ghi `YES` nếu có thể di chuyển từ ~M~ đến ~N~, ghi `NO` nếu không thể di chuyển được.

## Ví dụ:
#### Dữ liệu vào:
```
3
1 1 2 3
2 1 2 3
3 3 1 1
```

#### Dữ liệu ra:
```
YES
YES
NO
```

#### Giải thích:
- Câu hỏi ~1~: di chuyển như sau: ~(1,1) -> (2,1) -> (2,3)~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)