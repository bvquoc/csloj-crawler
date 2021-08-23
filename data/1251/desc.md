**<center>Nguồn: Đề ôn ĐTQG - Lương Văn Tụy - Ninh Bình</center>**

Cho một dãy gồm $n$ xâu $s_1,s_2,…,s_n$ và một số nguyên dương $k$. Một cặp hai xâu $s_i$ và $s_j$ trong dãy được gọi là tương thích với nhau nếu thỏa mãn:
- $0 < j-i ≤ k$;
- Hai xâu $s_i$ và $s_j$ có cùng độ dài.

**Yêu cầu:** Hãy xác định số cặp các xâu tương thích với nhau trong dãy các xâu đã cho.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên $n$ và $k\ (3 ≤  n ≤ 3×10^5; 1 ≤ k ≤ n)$;
- $n$ dòng tiếp theo mỗi dòng chứa một xâu có độ dài từ $2$ đến $20$ kí tự gồm các chữ 
cái tiếng Anh in hoa.

## Dữ liệu ra:
- Ghi ra một dòng duy nhất là kết quả của bài toán.

## Ví dụ: 
### Dữ liệu vào:
```
4 2
OTN
ABC
THA
HUN
```

### Dữ liệu ra:
```
5
```

### Dữ liệu vào:
```
6 3
CFETHIA
LLOYD
STEVIE
KEVIN
MALCABC
DABNEY
```

### Dữ liệu ra:
```
2
```

## Ràng buộc:
- Có $40\%$ số điểm ứng với $n ≤ 5000$;
- Có $60\%$ số điểm ứng với $n ≤ 3\times 10^5$