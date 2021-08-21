**<center>NGUỒN: ĐỀ THI CHỌN ĐỘI TUYỂN DỰ THI HỌC SINH GIỎI QUỐC GIA - 2020 - HẢI PHÒNG</center>**

Cho dãy $n$ số nguyên dương $a_1,a_2,…,a_n$. Với mỗi số $a_i\  (1≤i≤n)$ ta có thể thực hiện **không, một hoặc nhiều lần** phép biến đổi **tăng hoặc giảm $a_i$ một đơn vị**.

**Yêu cầu:** Hãy tính số phép biến đổi ít nhất để dãy đã cho thành dãy không giảm?

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n$;
- Dòng tiếp theo chứa $n$ số nguyên dương $a_1,a_2,…,a_n\ (1≤a_i≤10000,i=1..n)$.

Các số trên một dòng ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra một số duy nhất là số phép biến đổi ít nhất để dãy đã cho thành dãy không giảm.

## Ví dụ:
#### Dữ liệu vào:
```
5
2 6 4 3 2
```

#### Dữ liệu ra:
```
5
```

#### Giải thích:
- Áp dụng $2$ lần phép biến đổi **Giảm $a_2$ đi $1$ đơn vị**;
- **Tăng $a_4$ lên $1$ đơn vị**;
- Áp dụng $2$ lần phép biến đổi **Tăng $a_5$ lên $1$ đơn vị**.

Dãy thu được ${2;4;4;4;4}$

#### Dữ liệu vào:
```
5
2 6 6 7 7
```
#### Dữ liệu ra:
```
0
```

## Giới hạn:
- $15\%$ số điểm bài toán có $n≤8,a_i≤6$;
- $15\%$ số điểm bài toán có $n<150$;
- $15\%$ số điểm bài toán có $n<5000$;
- $15\%$ số điểm bài toán có $n≤5000$ và đáp án bài toán tìm được chỉ bằng cách sử dụng phép biến đổi trên một phần tử của dãy số;
- $40\%$ số điểm bài toán có $n≤100000$.