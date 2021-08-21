**<center>NGUỒN: CONTEST LÀO CAI Lần 2 2017</center>**

Ta có công thức tính hai loại trọng số của một dãy số như sau:

- Trọng số loại ~1 = Min×Max×Length~
- Trọng số loại ~2 = Min×Max×Sum~

Trong đó, **Min** là số có giá trị nhỏ nhất, **Max** là số có giá trị lớn nhất, **Sum** là tổng giá trị các số của dãy, **Length** là số phần tử trong dãy số đó.

Cho dãy ~n~ số nguyên dương ~a_1,a_2,…,a_n~ và một giá trị ~S~, ta có:

- ~P_1~ là tổng trọng số loại ~1~ của những đoạn con ~a_i,a_{i+1},…a_j\  (1≤i≤j≤n)~ có ~Sum > S~.
- ~P_2~ là tổng trọng số loại ~2~ của những đoạn con ~a_i,a_{i+1},…a_j\  (1≤i≤j≤n)~ có ~Sum≤S~.

**Yêu cầu**: Tính giá trị ~P_1+P_2~  theo modulo ~10^9+7~.

## Dữ liệu vào: 
- Dòng đầu tiên chứa hai số nguyên ~n,S\ (1≤n≤5.10^4,0≤S≤10^{18})~;
- Dòng thứ hai chứa ~n~ số nguyên dương ~a_i\  (1≤a_i≤10^9)~.
Các số trên một dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
Ghi ra một số nguyên duy nhất là kết quả của bài toán theo modulo ~10^9+7~.

## Ví dụ:
#### Dữ liệu vào:
```
4 3
1  2  3  4

```

#### Dữ liệu ra:
```
143
```

#### Giải thích:
- Những đoạn con có ~Sum>S: [1,2,3], [1,2,3,4], [2,3], [2,3,4], [3,4], [4] ⇒ P_1=1.3.3+1.4.4+2.3.2+2.4.3+3.4.2+4.4.1 = 101~.
- Những đoạn con có ~Sum≤S: [1], [1,2], [2], [3] ⇒ P_2=1.1.1+1.2.3+2.2.2+3.3.3=42~.

Do đó ~P_1+P_2=143~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)