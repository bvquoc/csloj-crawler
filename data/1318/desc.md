**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 08/11/2020</center>**

Cho một đồ thị cây gồm $𝑛$ nút, các nút đánh số $1,2, … , 𝑛$. Khoảng cách giữa hai nút bất kì là số cạnh trên đường đi đơn (duy nhất) nối chúng.

Cần sửa lại cây sao cho khoảng cách giữa hai nút xa nhất là nhỏ nhất có thể. Phép sửa cây là xóa bỏ đúng một cạnh rồi thêm vào đúng một cạnh sao cho đồ thị vẫn là cây. Hãy chỉ ra một cách sửa tối ưu.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên $𝑛\ (1 ≤ 𝑛 ≤ 3 × 10^5)$;
- $n - 1$ dòng tiếp theo, mỗi dòng ghi hai số nguyên là $𝑢, 𝑣$ thể hiện một cạnh của cây.

## Dữ liệu ra:
- Dòng đầu ghi đường kính của cây mới;
- Dòng thứ hai ghi hai số nguyên $𝑢, 𝑣$ là cạnh bị xóa;
- Dòng ba ghi hai số nguyên $𝑥, 𝑦$ là cạnh được thêm;

Nếu có nhiều phương án tối ưu thì chỉ cần đưa ra một trong số chúng.

## Ví dụ:
#### Dữ liệu vào:
```
4
1 2
2 3
3 4
```

#### Dữ liệu ra:
```
2
3 4
4 2
```

#### Dữ liệu vào:
```
7
1 3
2 3
2 7
4 3
7 5
3 6
```

#### Dữ liệu ra:
```
3
2 3
7 3
```