**<center>NGUỒN: Contest PreVOI Đà Lạt 2018 Day 2</center>**
<br>

<center><img src="/images/problems/1160/moving.svg" width=1080px></center>

## Ví dụ:
### Dữ liệu vào:
```
2
4 4
1 1 0 0
0 1 0 0
0 0 0 0
1 0 0 0
1 0 0 1
0 0 0 0
0 0 0 1
0 1 0 0
0 0 0 4
0 1 1 1
0 1 1 1
5 0 0 0
1 5
1 1 0 0 0
0 0 0 1 1
10 10 1 10 10
```

### Dữ liệu ra:
```
3
1
```

### Giải thích:
- Trong test ví dụ đầu tiên. Một cách di chuyển tối ưu là: Giữ nguyên vị trí cầu thủ đứng ở ô $(1, 1)$, di chuyển cầu thủ ở ô $(2, 2)$ theo thứ tự $(2, 2) - (3, 2) - (3, 3) - (3, 4)$, di chuyển cầu thủ ở ô $(1, 2)$ theo thứ tự $(1, 2) - (2, 2) - (2, 3) - (2, 4) - (1, 4)$, cầu thủ ở ô $(4, 1)$ không thể di chuyển. Có $3$ cầu thủ ở vị trí đội hình mong muốn là $(1, 1), (3, 4)$ và $(1, 4)$. Tuy ô $(2, 2)$ xuất hiện $2$ lần và $C(2, 2) = 1$ nhưng lần đầu tiên không được tính vì đó là vị trí xuất phát của đường đi.