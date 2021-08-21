Có ~N~ người đang xếp hàng chờ đợi để vào một buổi hòa nhạc. Mọi người cảm thấy buồn chán khi chờ đợi nên họ tìm những người thân của họ trong hàng đang xếp. Hai người ~A~ và ~B~ có thể nhìn thấy nhau nếu họ đang đứng ngay cạnh nhau hoặc không có người nào cao hơn ~A~ hoặc ~B~ đứng giữa. Hãy xác định số cặp có thể nhìn thấy nhau.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~N~ là số người đang đứng xếp hàng.
- Dòng thứ hai chứa ~N~ số nguyên dương ~h_1, h_2, …, h_N~ theo thứ tự là độ cao của những người đang đứng trong hàng.

## Dữ liệu ra:
- Một số nguyên duy nhất là số cặp có thể nhìn thất nhau.

## Ví dụ:
#### Dữ liệu vào:
```
7 
2 4 1 2 2 5 1
```

#### Dữ liệu ra:
```
10
```

#### Giải thích:
- ~10~ cặp có thể nhìn thấy nhau là ~(A, B), (B, C), (B, D), (B, E), (C, D), (B, F), (D, F), (D, E), (E, F), (F, G)~ như hình vẽ:
<center><img src="/images/problems/493/STCONCERT.svg" width="400px" /></center>

## Giới hạn:
- ~1 ≤ n ≤ 10^5; 1 ≤ h_i ≤ 10^9~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)