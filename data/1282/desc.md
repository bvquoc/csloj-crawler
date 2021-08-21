Mizzie là một người rất thích giải các bài toán về tin học. Lần này, Mizzie có một dãy nhị phân độ dài ~N~. Mizzie được phép thực hiện ~K~ thao tác, tại mỗi thao tác, Mizzie được phép chọn một trong ~N~ vị trí đó và đảo ngược bit tại vị trí đó (~0~ thành ~1~ hoặc ~1~ thành ~0~).

Sau ~K~ thao tác này, Mizzie phải đưa về dãy bit với toàn bit ~0~. Việc này không khó với Mizzie, tuy nhiên, Mizzie muốn biết số cách khác nhau để mình thực hiện công việc này.

## Dữ liệu vào:
- Dòng đầu tiên ghi ra số nguyên dương ~T~ là số lượng test ~(T≤50)~;
- Mỗi test bắt đầu bằng số nguyên dương ~N~ và ~K\ (1≤N,K≤1000)~;
- Tiếp sau đó là ~N~ số nguyên ~0/1~ thể hiện dãy bit của Mizzie.

## Dữ liệu ra:
- Gồm ~T~ dòng, mỗi dòng là một số nguyên theo modulo ~10^9+7~ tương ứng là kết quả của các test trong dữ liệu vào.

## Ví dụ:
#### Dữ liệu vào:
```
5
1 10
0
1 11
1
1 10
1
2 30
0
0
3 10
0
0
0
```

#### Dữ liệu ra:
```
1
1
0
536870912
14763
```

## Giới hạn:
- ~50\%~ có ~N≤100~.