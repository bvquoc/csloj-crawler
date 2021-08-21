CK-chan có một cây gồm $n$ đỉnh, mỗi đỉnh có màu trắng hoặc đen. CK-chan muốn xóa đi một số cạnh của cây, khi cô xóa đi $k$ cạnh, cây sẽ bị chia thành $k + 1$ thành phần liên thông. Cô muốn biết rằng, có bao nhiêu cách xóa một số các cạnh, để cho mỗi thành phần liên thông bị chia ra có duy nhất một đỉnh màu đen.

## Dữ liệu vào:
- Dòng đầu là số nguyên $N$ là số đỉnh $(2≤N≤10^5)$;
- Dòng thứ hai gồm $N – 1$ số nguyên $p_0, p_1, p_2,…, p_{n – 1}\ (0≤pi≤i)$, có nghĩa là có cạnh nối giữa đỉnh $i + 1$ với đỉnh $p_i$ (các đỉnh đánh số từ $0$ tới $n – 1$);
- Dòng thứ ba gồm $N$ số nguyên $0$ hoặc $1$, tương đương với màu trắng hoặc đen của các đỉnh tương ứng.

## Dữ liệu ra:
- Số nguyên duy nhất là kết quả của bài toán (theo modul $10^9+7$).

## Ví dụ:
#### Dữ liệu vào:
```
3
0 0
0 1 1	2
10
0 1 2 1 4 4 4 0 8
0 0 0 1 0 1 1 0 0 1
```

#### Dữ liệu ra:
```
27
```

## Giới hạn:
- $50\%$ có $N≤2000$.