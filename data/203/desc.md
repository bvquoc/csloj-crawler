Cho số nguyên dương $n$. Định nghĩa: $d(n)=n+$ tổng các chữ số của $n$.

**Ví dụ:** $d(75)=75+7+5=87$.

Với việc thực hiện liên tiếp phép tính $d(n)$ ta được một dãy vô hạn các số.

**Ví dụ:** $n=33$:
- $d(33)=33+3+3=39$;
- $d(39)=39+3+9=51$;
- $d(51)=51+5+1=57$.

Hay ta sẽ có dãy số như sau: $33,39,51,57,69,84,96,111,114,120,123,129,141,…$.

**Yêu cầu:** Cho $n$ và $m$. Hãy đếm trong dãy số sinh ra theo nguyên tắc trên có bao nhiêu số nhỏ hơn $m$.

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên dương $n,m\ (0< n≤1000;n≤m≤100000)$.

## Dữ liệu ra:
- Ghi ra một số nguyên là đáp án bài toán.

## Ví dụ:
### Dữ liệu vào:
```
33 100
```

### Dữ liệu ra:
```
7
```