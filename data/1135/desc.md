**<center>NGUỒN: ĐỀ KIỂM TRA ĐỘI TUYỂN 2019-2020 (Bài tập của thầy LÊ MINH HOÀNG - THPT Chuyên ĐHSP HN)</center>**
<br>

Các học trò của Giáo sư X đều biết rằng, mỗi khi làm đề thi mà bí bài thì Giáo sư sẽ cho bài toán tính tổng hai số: Cho hai số $A$ và $B$, hãy tính tổng của hai số đó.
Lần này Giáo sư muốn đổi phong cách một chút bằng cách phát biểu lại đề chút cho hứng thú: Cho một số nguyên dương $C$, hãy tìm hai số nguyên dương $A$ và $B$ sao cho $C = A + B$.
Tuy nhiên, sợ bài như này khó quá, các thí sinh không làm được nên Giáo sư phát biểu lại đề và thêm một số ràng buộc như sau:
Cho một số nguyên dương $C$ có $n$ chữ số, hãy đếm xem có bao nhiêu số nguyên dương $A$ và $B$ sao cho:
- $A$ và $B$ là những số nguyên dương có $n$ chữ số (không được bắt đầu bằng chữ số $0$) 
- $A + B = C$
- $A, B$ là những **số đẹp**. *Một số gọi là đẹp nếu không có hai chữ số cạnh nhau mà giống hệt nhau*. Ví dụ: $1221$ không phải là số đẹp nhưng $1212$ lại là một số đẹp.

**Yêu cầu**: Cho số $C$, hãy đếm xem có bao nhiêu cặp số nguyên dương $A$ và $B$ thỏa mãn yêu cầu của Giáo sư. Vì đáp án rất lớn nên chỉ cần đưa ra phần dư đáp số cho $10^9  + 7$.

## Dữ liệu vào:
- Gồm một dòng duy nhất chứa một số nguyên $𝐶$ (Số 
chữ số của $C$ tối đa là $10000$ chữ số).

## Dữ liệu ra:
- Một số nguyên duy nhất là số lượng cặp $𝐴, 𝐵$ tìm 
được theo yêu cầu đề bài (kết quả được chia cho $10^9+7$ lấy phần dư).

## Ví dụ:
### Dữ liệu vào:
```
23
```

### Dữ liệu ra:
```
2
```

### Giải thích:
- Có $2$ cặp thỏa mãn là $11 + 12 = 23$ và $13 + 12=23$ 

### Dữ liệu vào:
```
100
```

### Dữ liệu ra:
```
0
```
## Giới hạn: 
- $25\%$ số test có $𝐶 < 1000$ 
- $25\%$ số test khác có $𝐶 < 10^6$ 
- $50\%$ số test còn lại không có ràng buộc gì thêm