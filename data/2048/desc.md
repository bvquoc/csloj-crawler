**<center>Nguồn: Free Contest 7</center>**

Vườn treo Babylon (cũng được gọi là Vườn treo Semiramis) và những bức tường của Babylon (Iraq hiện nay) từng được coi là một trong Bảy kỳ quan của thế giới. Chúng được cho là do vua Nebuchadnezzar II xây dựng nên từ khoảng năm $600$ TCN.

Có $n$ loại đá có dạng hình hộp chữ nhật. Mỗi loại đá có chiều dài, chiều rộng, và chiều cao nhất định. Trong mỗi loại đá và có vô số tảng đá giống hệt nhau. Các tảng đá có thể được xếp chồng lên nhau để tạo ra tòa tháp rất cao. Các tảng đá có thể được xoay tùy ý trước khi chồng lên nhau. Tuy nhiên, để đảm bảo an toàn, một tảng đá có thể chồng lên một tảng đá khác khi và chỉ khi cả hai chiều của nó là ngắn hơn (tại mặt phẳng tiếp xúc).

Hãy tìm cách để sao cho tòa tháp cuối cùng thu được cao nhất có thể.

## Dữ liệu vào:
Input gồm nhiều test, kết thúc bằng một dòng chứa một số $0$. Mỗi test được mô tả như sau:
- Dòng đầu tiền chứa số nguyên dương $n\ (1 ≤ n ≤ 200)$;
- $n$ dòng tiếp theo, mỗi dòng chứa ba số nguyên dương $x, y, z$ mô tả chiều dài, chiều rộng và chiều cao của một loại đá.

## Dữ liệu ra:
- Với mỗi test, in ra chiều cao lớn nhất đạt được của tòa tháp.

## Ví dụ:
<center><img src="/images/problems/2048/babylontower.png" width=250px /></center>

### Dữ liệu vào:
```
5
31 41 59
26 53 58
97 93 23
84 62 64
33 83 27
1
1 1 1
0
```

### Dữ liệu ra:
```
342
1
```