Một mạng lưới giao thông gồm ~n~ thành phố và ~m~ tuyến đường xa lộ hai chiều. Trên mỗi xa lộ, người ta đã dựng sẵn các cột cây số để chỉ đường cho hành khách.

Để điền số **km** trên các cột cây số, người ta sử dụng một rô-bốt. Muốn điền đủ các cột cây số trên một tuyến đường ~(u, v)~ thì rô bốt phải thực hiện một chuyến đi từ ~u~ tới ~v~ và một chuyến đi từ ~v~ về ~u~, cứ sau mỗi km thì dừng lại và ghi vào một mặt của một cột cây số.

**Ví dụ:** Để điền các cột cây số trên tuyến đường Hà Nội - Hải Phòng. Đầu tiên rô-bốt xuất phát từ Hà Nội, cứ đi mỗi km thì dừng lại và điền vào cột cây số dòng "Hà Nội ... km", tất nhiên chỉ có thể điền vào mặt quay về hướng Hải Phòng bởi rô-bốt không biết được từ đó đến Hải Phòng còn bao xa. Muốn điền dòng chữ "Hải Phòng ... km" lên mặt còn lại của các cột cây số thì rô-bốt phải thực hiện hành trình từ Hải Phòng trở về Hà Nội.

**Yêu cầu:** Giả thiết rằng hệ thống giao thông đảm bảo sự đi lại giữa hai thành phố bất kỳ. Hãy tìm một hành trình của rô-bốt xuất phát từ thành phố ~1~, đi viết đầy đủ lên các cột cây số trên tất cả các tuyến đường rồi quay trở về thành phố ~1~, sao cho mỗi mặt của cột cây số bất kỳ nào cũng chỉ bị viết một lần.

## Dữ liệu vào:
- Dòng đầu chứa hai số ~n, m~ cách nhau một dấu cách;
- ~m~ dòng tiếp theo, mỗi dòng ghi hai số ~u, v~ cách nhau một dấu cách: cho biết giữa hai thành phố ~u~ và ~v~ có một tuyến xa lộ nối chúng.

## Dữ liệu ra:
- Ghi ra hành trình rô-bốt phải đi: Bắt đầu từ thành phố ~1~, tiếp theo là các thành phố đi qua theo đúng thứ tự trong hành trình, kết thúc là thành phố ~1~. Các số hiệu thành phố phải ghi cách nhau ít nhất một dấu cách hoặc dấu xuống dòng.

## Ví dụ:
<center><img src="/images/problems/549/MSTONES.png" width="300px" /></center>

#### Dữ liệu vào:
```
7 8
1 2
2 3
3 4
4 2
2 5
5 6
6 7
6 2
```

#### Dữ liệu ra:
```
1 2 6 7 6 5 2 5 6 2 4 3 2 3 4 2 1
```

## Giới hạn:
- ~2 ≤ n ≤ 10^5; m ≤ 5×10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)