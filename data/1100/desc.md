**<center>NGUỒN: PreVNOI Ⅷ (BẮC NINH 2018)</center>**
<br>

Cho hay dãy số nguyên dương $a_1,a_2,…,a_m$ và $b_1,b_2,…,b_n$. Các bạn cần xây dựng dãy $c$ gồm $k$ phần tử $c_1,c_2,…,c_k$ thỏa các yêu cầu sau:
- Tồn tại một dãy con của dãy $c$ là dãy con của dãy $a$
- Các phần tử còn lại của dãy $c$ là một dãy con của $c$ đồng thời là dãy con của dãy $b$
- Dãy $c$ có thứ tự từ điển nhỏ nhất.

**Chú ý**: Dãy rỗng được coi là dãy con của mọi dãy nên nếu dãy c dãy con của chỉ một trong hai dãy đã cho cũng được coi là thỏa mãn hai điều kiện đầu tiên.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên $m,n,k\ (1≤m,n≤3000;k≤m+n)$
- Dòng thứ hai chứa $n$ số $a_1,a_2,…,a_m$
- Dòng thứ ba chứa $m$ số $b_1,b_2,…,n$

## Dữ liệu ra:
- Ghi ra một dòng duy nhất chứa $k$ số của dãy $c$ tìm được.

## Giới hạn:
- $50\%$ số điểm ứng với các test có $m,n≤100$
- $50\%$ số điểm ứng với các test khác không có ràng buộc bổ sung.

## Ví dụ:
### Dữ liệu vào:
```
7 4 9
1 2 1 3 1 2 1
1 2 3 1
```

### Dữ liệu ra:
```
1 1 1 1 2 1 2 3 1
```

### Giải thích:
- Dãy con của dãy a là: $1\ 1\ 1\ 2\ 1$
- Các phần tử còn lại tạo thành dãy con của dãy $b$ là: $1\ 2\ 3\ 1$