**<center>NGUỒN: VOI Training Camp 3H  (Ngày 02/11/2016 Am)</center>**
<br>

Có $N$ cột liên tiếp nhau $1,2,3,…,N$. Cột thứ $i$ gồm $h_i$ khối hộp chồng lên nhau. Chi phí để di chuyển một khối sang một vị trí là $1$ đơn vị. Người ta muốn dồn tất cả các khối hộp vào một số cột sao cho khoảng cách giữa $2$ cột khác nhau bất kỳ còn khối hộp là một số nguyên tố.

<center><img src="/images/problems/1043/mountain.svg" width=1000px></center>
<center><b>Hình minh họa</b></center>

**Ví dụ:** với dãy cột $1,2,1,3,2,1,2,1$ thì hình bên trái thể hiện một cách di chuyển với chi phí là $13$, hình bên phải thể hiện một cách di chuyển với chi phí là $6$.

**Yêu cầu:** Xác định chi phí nhỏ nhất để di chuyển các khối hộp thỏa mãn điều kiện trên.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương  $N\ ( N≤30000)$
- Dòng thứ hai chứa $N$ số nguyên $h_1,h_2,…,h_N\  (0≤h_i≤10^3)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là chi phí nhỏ nhất tìm được.

## Ví dụ:
### Dữ liệu vào:
```
2
1 2
```

### Dữ liệu ra:
```
1
```

### Dữ liệu vào:
```
3
0 0 0
```

### Dữ liệu ra:
```
0
```

### Dữ liệu vào:
```
8
1 2 1 3 2 1 2 1
```

### Dữ liệu ra:
```
6
```