<!--**<center>NGUỒN: Free Contest FYT Code Cup Day 2</center>**-->

Các thành viên của FYT cực kỳ thích các trò chơi đỏ đen. Biết được nhu cầu của các thành viên, Khánh đã không tiếc tiền mua về $N$ con xúc xắc cho các bạn. Không chỉ vậy, các con xúc xắc này còn rất đặc biệt, chúng không chỉ có $6$ mặt như thông thường mà có tận $K$ mặt, các mặt có số chấm từ $1$ đến $K$.

Đắc tỏ ra rất thích thú với trò chơi này, cậu ta tung ngẫu nhiên lần lượt $N$ con xúc xắc và cẩn thận tính lại tổng số chấm của các mặt ngửa lên. Đắc chỉ thấy thỏa mãn nếu như tổng số chấm nhận được lớn hơn $S$.

Yêu cầu: Hãy tính xác suất nhận được tổng số chấm lớn hơn $S$.

## Dữ liệu vào:
- Dòng duy nhất chứa các số nguyên $N, K$ và $S$.

## Dữ liệu ra:
- Gọi xác suất phải tìm là $P$ , biết rằng $V = P ×K^N$ là một số nguyên không âm, hãy in ra phần dư của $V$ khi chia cho $998244353$.

## Ví dụ:
### Dữ liệu vào:
```
2 3 4
```

### Dữ liệu ra:
```
3
```

### Giải thích:
Các trường hợp tung $2$ con xúc xắc đạt tổng lớn hơn $4$ là $(2, 3), (3, 2)$ và $(3, 3)$, mỗi trường hợp xảy ra với xác suất $1/9$, như vậy $V = 3/9 ×3^2 = 3$.

## Giới hạn:
- $1 ≤ N, K, S ≤ 10^6, S ≤ N ×K$.