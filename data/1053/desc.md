**<center>NGUỒN: PreVNOI Ⅲ (NINH BÌNH 2013)</center>**
<br>

Mất ngủ vì không có đối thủ trong môn cờ vua, KHUELD quyết định chế tạo một robot  để chơi cờ với mình. Một trong những việc đầu tiên là phải “dạy” robot biết quy tắc không chế bàn cờ của quân hậu. 
Xét bàn cờ vua hình chữ nhật kích thước ~𝑚 × 𝑛~ được chia làm lưới ô vuông đơn vị. Các hàng của bàn cờ được đánh số từ ~1~ tới ~m~ từ trên xuống và các cột của bàn cờ được đánh số từ 1 tới ~n~ từ trái qua phải, ô nằm trên giao của hàng ~i~ và cột ~j~ được gọi là ô ~(𝑖, 𝑗)~ 
Trên bàn cờ, tại một số ô có đặt vật cản. Quân hậu ở một ô có thể không chế một ô khác nếu đoạn thẳng nối tâm hai ô đó song song với một trong hai cạnh bàn cờ và đi qua đỉnh ô vuông có quân hậu đang đứng, đồng thời đoạn thẳng nối tâm hai ô không được chứa tâm bất kỳ ô nào chứa vật cản. Ta quy ước rằng quân hậu phải đặt vào ô không có vật cản và cũng khống chế luôn ô nó đang đứng. 

**Yêu cầu**: Cho biết tình trạng bàn cờ, với mỗi ô ~(𝑖, 𝑗)~ không chứa vật cản, hãy “dạy” cho robot của KHUELD biết có bao nhiêu ô trên bàn cờ mà đặt hậu ở đó sẽ không chế được ô ~(𝑖, 𝑗)~ 

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~𝑚, 𝑛 ≤ 1000~
- ~m~ dòng tiếp theo, dòng thứ  ~i~ chứa ~n~ ký tự liền nhau, ký tự thứ  ~j~ là dấu `.` (chấm) nếu ô ~(𝑖, 𝑗)~ là ô trống, là dấu `#` nếu ô ~(𝑖, 𝑗)~ có đặt vật cản. 

## Dữ liệu ra:
- Ghi ra ~m~ dòng, dòng ~i~ in ra ~n~ số nguyên, số nguyên thứ ~j~ là số ô trên bàn cờ mà khi đặt quân hậu vào ô đó có thể khống chế được ô ~(𝑖, 𝑗)~.  
Các số trên một dòng  được/phải ghi cách nhau bởi dấu cách.

## Ví dụ:
#### Dữ liệu vào: 
```
4 3
.#.
.#.
...
..#
```

#### Dữ liệu ra:
```
4 0 3 
5 0 5 
7 7 6 
7 5 0
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)