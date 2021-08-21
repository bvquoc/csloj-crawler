**<center>NGUỒN: Bài tập thầy Lê Minh Hoàng ôn Hải Phòng T10/2016</center>**

Cho mạng $𝐺 = (𝑉, 𝐸, 𝑐, 𝑠, 𝑡)$. Xác định luồng cực đại trên mạng.

## Dữ liệu vào:
- Dòng đầu chứa số đỉnh $𝑛 ≤ 10^5$, số cung $𝑚 ≤ 10^5$ của mạng, đỉnh phát $𝑠$, đỉnh thu $𝑡$;
- $𝑚$ dòng tiếp theo, dòng $𝑖$ chứa thông tin về cung thứ $𝑖$ gồm ba số nguyên dương $𝑢, 𝑣, 𝑐$ tương ứng với một cung nối từ $𝑢$ tới $𝑣$ với sức chứa $𝑐 ≤ 10^9$.

## Dữ liệu ra:
- Dòng đầu ghi giá trị luồng cực đại;
- $𝑚$ dòng tiếp, dòng $𝑖$ ghi luồng trên cung thứ $𝑖$.

## Ví dụ:
<center><img src="/images/problems/1427/FLOW.svg" width="300px" /></center>

#### Dữ liệu vào:
```
6 8 1 6
5 6 6
4 6 6
3 5 1
3 4 3
2 5 3
2 4 6
1 3 5
1 2 5
```

#### Dữ liệu ra:
```
9
3
6
1
3
2
3
4
5
```