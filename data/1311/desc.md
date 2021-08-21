**<center>NGUỒN: Bài tập thầy Vũ Mạnh Hà - Ôn Hải Phòng 08/11/2020</center>**

Đất nước ZZZ có ~𝑛~ thành phố đánh số ~1,2, … , 𝑛~, các thành phố được nối với nhau bởi ~𝑚~ con đường hai chiều đánh số ~1,2, … , 𝑚~, trong đó một số con đường có thu phí.

Chính phủ muốn đóng cửa một số con đường, chỉ giữ lại ~𝑛 − 1~ con đường nhưng phải đảm bảo hai thành phố bất kỳ có thể tới được nhau thông qua một hay nhiều con đường liên tiếp. Ngoài ra, trong số các con đường được giữ lại phải có đúng ~𝑘~ con đường có thu phí.

Hãy đưa ra một phương án giữ lại các con đường phù hợp.

## Dữ liệu vào:
- Dòng đầu chứa ba số nguyên ~𝑛, 𝑚, 𝑘\ (1 ≤ 𝑘 < 𝑛 ≤ 10^5, 1 ≤ 𝑚 ≤ 2 × 10^5)~;
- ~m~ dòng tiếp theo, dòng thứ ~i~𝑖 ghi ba số nguyên ~𝑎_𝑖, 𝑏_𝑖, 𝑐_𝑖~, cho biết con đường thứ ~𝑖~ nối hai thành phố ~𝑎_𝑖, 𝑏_𝑖~ và là con đường không thu phí nếu ~𝑐_𝑖 = 0~, có thu phí nếu ~𝑐_𝑖 = 1~.

## Dữ liệu ra:
- Ghi ra trên một dòng ~𝑛 − 1~ số nguyên dương là chỉ số các con đường cần giữ lại hoặc số nguyên ~−1~ nếu không có phương án. Nếu có nhiều phương án thỏa mãn thì chỉ cần đưa ra một phương án bất kì.

## Ví dụ:
#### Dữ liệu vào:
```
3 3 1
1 2 0
1 3 1
2 3 0
```

#### Dữ liệu ra:
```
1 2
```