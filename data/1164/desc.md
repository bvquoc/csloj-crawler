**<center>NGUỒN: PVH VNOI ONLINE 2019 Day 1 (04/01/2019)</center>**
<br>

<center><img src="/images/problems/1164/vector.svg" width=1080px></center>

**<center>Chú ý: Điểm sẽ được quy đổi sang thang điểm 100 theo đúng tỉ lệ</center>**

## Ví dụ:
#### Dữ liệu vào:
```
2
6 7
3
7 3 2
```

#### Dữ liệu ra:
```
5
42 D
6 W
7 W
14 L
3 L
```

#### Giải thích:
Ban đầu số cốc bia hai người cần uống là ~(𝐴, 𝐵) = (42,42)~. GSPVH cho chơi ~5~ ván: 
- Ván ~1~: ~𝑃 = 42~, hai người hoà nhau. Số cốc bia là ~(𝐴, 𝐵) = (42,42 × 42) = (42,1764)~. 
- Ván ~2~: ~𝑃 = 6~, Đức gáy to thắng. Số cốc bia là ~(𝐴, 𝐵) = (42 × 6, \frac{1764}{6^2}) = (252,49)~. 
- Ván ~3~: ~𝑃 = 7~, Đức gáy to thắng. Số cốc bia là ~(𝐴, 𝐵) = (252 × 7, \frac{49}{7^2}) = (1764,1)~. 
- Ván ~4~: ~𝑃 = 14~, Thắng dễ thương thắng. Số cốc bia là ~(𝐴, 𝐵) = (\frac{1764}{14^2}, 1) = (9,1)~. 
- Ván ~5~: ~𝑃 = 3~, Thắng dễ thương thắng. Số cốc bia là ~(𝐴, 𝐵) = (\frac{9}{3^2}, 1) = (1,1)~. 

Sau ~5~ ván, tổng số cốc bia hai người cần uống là ~𝐴 + 𝐵 = 1 + 1 = 2~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)