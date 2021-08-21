**<center>NGUỒN: Contest PreVOI Đà Lạt 2018 Day 1</center>**
<br>

<center><img src="/images/problems/1156/connect.svg" width=1080px></center>

## Ví dụ:
### Dữ liệu vào:
```
2 3 4 1 1000000000
2 3 5
3 2 7
1 2 6
1 1 8
2 1 5
```

### Dữ liệu ra:
```
41
```

### Giải thích:
- Một cách cắt giảm chi phí lớn nhất: cắt giảm hệ thống dịch giữa hai thành phố $(1,1)$ và $(1,1), (2,1)$ và $(2,1), (1,1)$ và $(1,2), (1,3)$ và $(1,2), (2,3)$ và $(2,2)$, cắt giảm tuyến bay giữa hai thành phố $(2,3)$ và $(1,3)$. Như vậy tổng chi phí cắt giảm là $8 + 8 + 6 + 7 + 7 + 5 = 41$.