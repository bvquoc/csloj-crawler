Ở giữa đêm, một nhóm du khách muốn qua một cây cầu cũ và đổ nát. Họ đã chỉ có một chiếc đèn pin,  ánh sáng của đèn pin chỉ cho phép nhiều nhất hai khách du lịch qua cầu cùng một lúc. Các du khách không thể qua cầu mà không có đèn pin hoặc trong các nhóm lớn hơn hai trừ khi họ muốn rơi xuống sông. Mỗi du khách cần một lượng thời gian nhất định để vượt qua cây cầu. Hai khách du lịch qua cầu với nhau cần một khoảng thời gian của người chậm nhất trong nhóm hai người qua cầu. Hãy tính thời gian ngắn nhất để nhóm du khách qua cầu?

**Ví dụ:** Giả sử nhóm du khách có $4$ người. Người đầu tiên của họ cần $6$ phút để vượt qua cây cầu,  người thứ hai là $7$ phút, người thứ ba là $10$ phút và người thứ tư là $15$ phút. Các hình ảnh sau đây cho thấy làm thế nào họ có thể vượt qua cây cầu trong 44 phút. Tuy nhiên, họ có thể làm nó nhanh hơn. Làm thế nào?
<center>
<img src="/images/problems/253/BRIDGE.png" width="500px" />

*Một phương pháp qua cầu trong $44$ phút. Các con số trong vòng tròn biểu thị thời gian (theo phút) qua cầu của khách du lịch.*
</center>

<br>

**Yêu cầu:** Tìm thời gian ngắn nhất để đoàn du khách qua cây cầu.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $n$ là số khách du lịch $(1\le n \le 10^5 )$;
- Dòng thứ $i$ trong $n$ dòng tiếp theo, mỗi dòng ghi một số nguyên dương là thời gian để du khách thứ $i$ qua cầu. Tổng thời gian qua cầu của $n$ du khách không vượt quá $10^9$.

## Dữ liệu ra:
- Gồm một số duy nhất là thời gian ngắn nhất để đoàn du khách qua cầu.

## Ví dụ:
### Dữ liệu vào:
```
4
6
7
10
15
```

### Dữ liệu ra:
```
42
```