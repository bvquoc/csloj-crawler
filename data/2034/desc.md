**<center>Nguồn:  Free Contest 05</center>**

Những số nguyên tố nhỏ hơn ~50~ được rất nhiều người quan tâm. Gọi tích của các số đó là ~M~. Bài toán này liên quan đến các ước số của ~M\ (M=2×3×5×7×11×13×17×19×23×29×31×37×41×43×47)~.

Ban đầu bạn được cho một số ~N\ (N~ là ước của ~M)~. Bạn được cho phép thực hiện ~Q~ thao tác có dạng ~x\ y\ (x, y~ là các ước số của ~M)~ với ý nghĩa là đổi số ~N~ lấy số ~[(N, x), y]~. Mỗi thao tác có thể thực hiện nhiều lần. Bạn cần biến đổi sao cho số thu được là lớn nhất.

**Chú ý:** ký hiệu ~[A, B]~ là **BCNN** của ~A, B~ còn ~(A, B)~ là **ƯCLN** của ~A, B~.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N~ và ~Q~, là số ban đầu và số lượng các thao tác được cho phép ~(N~ là ước số của ~M, 1 ≤ Q ≤ 50)~;
- ~Q~ dòng tiếp theo, mỗi dòng gồm hai số nguyên dương ~x, y~, cho phép bạn thực hiện thao tác ~x\ y\ (x, y~ là các ước số của ~M)~.

## Dữ liệu ra:
- Một dòng duy nhất chứa số lớn nhất có thể đạt được sau khi thực hiện các bước biến đổi.

## Ví dụ:
#### Dữ liệu vào:
```
10 2
35 3
5 14
```

#### Dữ liệu ra:
```
105
```

#### Giải thích:
- Lần thứ nhất biến đổi ~10 → 70~ qua thao tác ~5\ 14~;
- Lần thứ hai biến đổi ~70 → 105~ qua thao tác ~35\ 3~.