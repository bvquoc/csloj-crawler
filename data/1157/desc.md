**<center>NGUỒN: Contest PreVOI Đà Lạt 2018 Day 1</center>**
<br>

<center><img src="/images/problems/1157/string.svg" width=1080px></center>

## Ví dụ:
### Dữ liệu vào:
```
5
1 a
1 ab
1 aba
2 abc
2 aba
```

### Dữ liệu ra:
```
3
7
```

### Dữ liệu vào:
```
3
1 a
1 a
2 a
```

### Dữ liệu ra:
```
1
```

### Giải thích:
- Trong test ví dụ đầu tiên:
    - Truy vấn thứ ~4~ là có xâu `a` xuất hiện ~1~ lần và xâu `ab` xuất hiện ~1~ lần. Vì vậy kết quả sẽ là: ~1 ×1 + 1 ×2 = 3~.
    - Truy vấn thứ ~5~ là có xâu `a` xuất hiện ~2~ lần, xâu `ab` xuất hiện ~1~ lần và xâu `aba` xuất hiện ~1~ lần. Vì vậy kết quả sẽ là: ~2 ×1 + 1×2 + 1 ×3 = 7~.
- Trong test ví dụ thứ hai, truy vấn thứ hai sẽ bị bỏ qua vì trước đó xâu `a` đã được thêm vào danh sách.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)